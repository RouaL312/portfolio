import emailjs from "@emailjs/browser";


const mail = ({ name, email, message }) => {
  return emailjs.send(
    "service_752pi9o",
    "template_rt80c4h",
    { name, email, message },
    "-I6TQziM-1vz_41vq"
  );
};

export default mail;
