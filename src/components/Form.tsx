import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import "../App.css";
import FormButton from "./FormButton";
import Prefer from "./Prefer";
import { MdAttachFile } from "react-icons/md";
import { Input } from "./Input";
import AddInfo from "./AddInfo";
import InfoForm from "./InfoForm";
import Select from "./Select";
import { cloudStorageRef, db, storage } from "./Backend";
import { set, ref } from "firebase/database";

import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [captchaVerify, setCaptchaVerify] = useState(false);
  console.log("Captcha value:", captchaVerify);
  const [resumeLabel, setResumeLabel] = useState("Attach Resume/CV");
  const [resumeError, setResumeError] = useState("null");

  const uploadResume = (data: { [x: string]: any }) => {
    const storageRef = cloudStorageRef(storage, "some-random-name");
    const uploadTask = uploadBytesResumable(storageRef, data.Resume[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          data.Resume = downloadURL;
          set(ref(db, "candidatess"), data)
            .then(() => {
              // alert(data);
              console.log("DONE");
              reset();
            })
            .catch((e) => console.log("error", e));
        });
      }
    );
  };
  const onInputChage = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      console.log(e.currentTarget.files[0].name);
      setResumeLabel(e.currentTarget.files[0].name);
      if (e.currentTarget.files[0].type !== "application/pdf")
        setResumeError("Invalid File Format");
      else if (e.currentTarget.files[0].size > 5 * 1024 * 1024)
        setResumeError("File size is greater than 5MB");
      else setResumeError("null");
    } else {
      setResumeError("This field is required");
    }
  };

  return (
    <div className="mainContent">
      <div className="content-section">
        <div className="container">
          <div className="postHeader">
            <h2>Full-Stack Engineer</h2>
            <div className="categories">
              <div className="catLabel">Remote optional /</div>
              <div className="catLabel">Product – Engineering /</div>
              <div className="catLabel">Full-time</div>
            </div>
          </div>
        </div>
      </div>
      <div className="formSection">
        <div className="container">
          <form
            onSubmit={handleSubmit((data) => {
              if (Object.keys(errors).length === 0 && resumeError === "null") {
                uploadResume(data);
                console.log(data);
              }
            })}
          >
            {/* file uploading */}
            <div className="formTitle">
              <h4>Submit your application</h4>
            </div>
            <div className="formStyle row rowMarBot">
              <div className="col-md-6 col-lg-4">
                <label className="labelMrgin">Resume/CV *</label>
              </div>
              <div className="col-md-6 col-lg-8">
                <div className="selectFile">
                  <span className="selectFile-label">
                    <MdAttachFile />
                    ATTACH RESUME/CV
                  </span>

                  <input
                    type="file"
                    accept="application/pdf"
                    onInput={(e) => onInputChage(e)}
                    {...(register ? { ...register("Resume") } : null)}
                  />
                  {resumeError !== "null" && <p>{resumeError}</p>}
                </div>
              </div>
            </div>

            {/* <Fileupload register={register} errors={errors} /> */}
            <Input Label="Full Name *" register={register} errors={errors} />
            <Input Label="Email *" register={register} errors={errors} />
            <Input Label="Phone" register={register} errors={errors} />
            <Input
              Label="Current company"
              register={register}
              errors={errors}
            />
            <h4>Links</h4>
            <Input Label="LinkedIn URL" register={register} errors={errors} />
            <Input Label="Github URL" register={register} errors={errors} />
            <Input Label="Twitter URL" register={register} errors={errors} />
            <Input Label="Other Website" register={register} errors={errors} />
            <Prefer
              Label="If you'd like, please share your pronouns with us."
              h4="Preferred pronouns"
              register={register}
              errors={errors}
            />
            <AddInfo
              h4="Additional information"
              register={register}
              errors={errors}
            />
            <InfoForm />
            <Select register={register} errors={errors} />
            <div className="CaptchaCont">
              <ReCAPTCHA
                sitekey="6LeSkmkeAAAAAEE5vg19VItyCxdusl5xRCFYFrna"
                onChange={() => setCaptchaVerify(true)}
                onErrored={() => setCaptchaVerify(false)}
              />

              {Object.keys(errors).length > 0 && !captchaVerify && (
                <p>Please Select Captcha</p>
              )}
            </div>
            <FormButton />
          </form>
        </div>
      </div>
    </div>
  );
}
