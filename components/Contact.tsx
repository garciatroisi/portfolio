const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I&apos;m always open to exploring new challenges and opportunities where
        I can contribute as a developer or consultant. Feel free to reach out if
        you have any questions or simply want to connect.
      </p>

      <div>
        <a href="mailto:premierfootballgrowth@gmail.com">
          <button className="w-40 h-14 border border-textGreen font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
            Say Hello
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
