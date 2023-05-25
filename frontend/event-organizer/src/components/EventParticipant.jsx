import { Card, Button } from "react-bootstrap";

export const EventParticipant = ({ post, onDelete }) => {
  const handleOnClick = () => {
    onDelete(post.id);
  };

  const { name, surname, email, phoneNumber } = post;

  return (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {name} {surname}
        </Card.Title>
        <Card.Text>email: {email}</Card.Text>
        <Card.Text>phone number: {phoneNumber}</Card.Text>
        <Button onClick={handleOnClick} variant="dark">
          Not participating
        </Button>
      </Card.Body>
    </Card>
  );
};
