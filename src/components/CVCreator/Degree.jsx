import React from "react";

const Degree = ({ index, id, degree, handleEducationChange, deleteDegree }) => {
  return (
    <div className="border-2 border-black m-10 p-10">
      <h1 className="text-2xl">Degree {index}</h1>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>School:</label>
            <input
              className="border-2 border-black"
              name="school"
              type="text"
              placeholder="School name"
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Degree:</label>
            <input
              className="border-2 border-black"
              name="degree"
              type="text"
              placeholder="Degree title"
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Start date:</label>
            <input
              className="border-2 border-black"
              name="startDate"
              type="date"
              placeholder="Start date"
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <label>End date:</label>
            <input
              className="border-2 border-black"
              name="endDate"
              type="date"
              placeholder="End date"
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Description:</label>
            <textarea
              className="border-2 border-black"
              name="description"
              type="text"
              placeholder="A job description."
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <button
              className="border-2 border-black m-5 px-6 py-2"
              onClick={deleteDegree}
            >
              Delete
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Degree;
