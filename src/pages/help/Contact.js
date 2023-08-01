import { Form, redirect, useActionData } from "react-router-dom";

// request contains all the form values
export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    // get from the name attribute
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submission);

  // usually send request to server

  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long" };
  }

  // redirect user
  return redirect("/");
};

const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      {/* In action we don't specify a function name, we specify the route path */}
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export default Contact;
