import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { EventParticipant } from "./EventParticipant";

export const EventParticipantsList = () => {
  const [participants, setParticipants] = useState([EventParticipantsList]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteParticipant = (participantId) => {
    // setParticipants(
    //   participants.filter((participant) => participant.id !== participantId)
    // );
    const id = participantId;
    axios
      .delete(`http://localhost:8000/participants/${id}`)
      .then((response) => {
        console.log("deleted", response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/participants")
      .then((response) => {
        setParticipants(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {participants.map((participant) => (
        <EventParticipant
          key={participant.id}
          post={participant}
          onDelete={handleDeleteParticipant}
        />
      ))}
    </ul>
  );
};
