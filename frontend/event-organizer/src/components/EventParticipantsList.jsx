import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { EventParticipant } from "./EventParticipant";

export const EventParticipantsList = () => {
  const [participants, setParticipants] = useState([EventParticipantsList]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteParticipant = (participantId) => {
    setParticipants(
      participants.filter((participant) => participant.id !== participantId)
    );
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

  // console.log("addedParticipants", addedParticipants);

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
