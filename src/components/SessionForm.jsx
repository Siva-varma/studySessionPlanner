import React from "react";
import { useForm } from "react-hook-form";
import { useSessionContext } from "../Context/ContextContext";
const SessionForm = () => {
    const {addSession, toggle, setToggle} = useSessionContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addSession(data);
    reset();
    setToggle(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <div className="flex flex-col gap-2 p-4 w-[600px] bg-[#ffffff] rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">Create a New Session</h2>

        <form
          className="flex flex-col gap-4 w-[80%] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label className="font-bold">Topic name</label>
            <input
              className={`w-[100%] border rounded p-2 mx-auto text-md  ${errors.topicName ? "border-red-500 placeholder:text-red-500" : ""}`}
              placeholder={
                errors.topicName ? "Topic name is required" : "Enter topic name"
              }
              type="text"
              {...register("topicName", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Select subject</label>
            <select
              className={`w-[100%] border rounded p-2 mx-auto text-md ${errors.subject ? "border-red-500 placeholder:text-red-500" : ""}`}
              placeholder={
                errors.subject ? "Subject is required" : "Select a subject"
              }
              {...register("subject", { required: true })}
            >
              <option className="text-black" value="">
                Select a subject
              </option>
              <option className="text-black" value="DSA">
                DSA
              </option>
              <option className="text-black" value="Web Development">
                Web Development
              </option>
              <option className="text-black" value="DBMS">
                DBMS
              </option>
              <option className="text-black" value="OS">
                OS
              </option>
              <option className="text-black" value="Others">
                Others
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Duration</label>
            <input
              className={`w-[100%] border rounded p-2 mx-auto text-md ${errors.duration ? "border-red-500 placeholder:text-red-500" : ""}`}
              placeholder={
                errors.duration
                  ? "Duration is required"
                  : "Enter duration in minutes"
              }
              type="number"
              {...register("duration", { required: true, min: 10 })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Priority</label>
            <select
              className={`w-[100%] border rounded p-2 mx-auto text-md ${errors.priority ? "border-red-500 placeholder:text-red-500" : ""}`}
              placeholder={
                errors.priority ? "Priority is required" : "Select priority"
              }
              {...register("priority", { required: true })}
            >
              <option className="text-black" value="">
                Select priority
              </option>
              <option className="text-black" value="High">
                High
              </option>
              <option className="text-black" value="Medium">
                Medium
              </option>
              <option className="text-black" value="Low">
                Low
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Select date</label>
            <input
              className={`w-[100%] border rounded p-2 mx-auto text-md ${errors.date ? "border-red-500 placeholder:text-red-500" : ""}`}
              placeholder={errors.date ? "Date is required" : "Select a date"}
              type="date"
              {...register("date", { required: true })}
            />
          </div>
          <button
            className="bg-[royalblue] p-2 rounded-sm hover:bg-blue-700 active:scale-95 text-white font-bold"
            type="submit"
          >
            Create Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default SessionForm;
