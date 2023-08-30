import axios from "axios";
import { useState } from "react";

export default function BookAppoitment(props) {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [doctor, setDoctor] = useState("");
  let [where, setWhere] = useState("");
  let [when, setWhen] = useState("");
  let [loading, setLoading] = useState(false);
  let [api, setApi] = useState(null);

  console.log(email);
  let whereTo = (
    <div>
      <h3>Where</h3>
      <input
        id="google_meet"
        name="where"
        type="radio"
        value="googleMeet"
        onChange={(e) => {
          setWhere(e.target.value);
        }}
      ></input>
      <label for="google_meet">Google Meet</label>
      <br />
      <input
        id="phone"
        name="where"
        type="radio"
        value="phone"
        onChange={(e) => {
          setWhere(e.target.value);
        }}
      ></input>
      <label for="phone">Phone</label>
    </div>
  );
  if (doctor === "") {
    whereTo = "";
  }
  let whenTo = (
    <div>
      <h3>When</h3>
      <input
        id="date"
        name="where"
        type="date"
        onChange={(e) => {
          setWhen(e.target.value);
        }}
      ></input>
    </div>
  );
  if (doctor === "") {
    whenTo = "";
  }
  let isLoading = <h1>Scheduling the appoitment...</h1>;
  if (!loading) {
    isLoading = "";
  }

  async function handleSubmit() {
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      doctor: doctor,
      where: where,
      when: when
    };
    setLoading(true);
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts ",
      data
    );
    console.log(response);
    setTimeout(() => {
      setLoading(false);
      setApi(response.data.id);
      console.log(response.data.id);
    }, 2000);
  }
  let form = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1>BOOK A SESSION</h1>
      <p>Fill in the form below to book a virtual session with a doctor</p>
      {loading ? (
        isLoading
      ) : (
        <div>
          {" "}
          <h3>Basic Info</h3>
          <div>
            <label for="first_name">First Name</label>
            <input
              id="first_name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label for="last_name">Last Name</label>
            <input
              id="last_name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <h3>Doctor</h3>
          <select
            value={doctor}
            onChange={(e) => {
              setDoctor(e.target.value);
            }}
          >
            <option value="">Select your doctor</option>
            <option value="maran">Dr. Maran</option>
            <option value="john">Dr. John</option>
          </select>
          {whereTo}
          {whenTo}
          <br />
          <button>Confirm Booking</button>
        </div>
      )}
    </form>
  );
  let confirmBooking = (
    <div>
      <h1>Appoitment Booked successfully...</h1>
      <button
        onClick={() => {
          setApi(null);
          console.log(api+">>>");
        }}
      >
        cancel Booking
      </button>
    </div>
  );
  return <div>{api ? confirmBooking : form}</div>;
}
