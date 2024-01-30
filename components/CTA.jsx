export default function CTA() {
  return (
    <div className="relative margin-x margin-y flex flex-col items-center gap-10">
      {/* <div className="-z-10 absolute top-0 right-0 bg-blue-200/50 size-96 blur-3xl opacity-5 animate-pulse" />
      <div className="-z-10 absolute bottom-0 left-0 bg-green-200/50 size-72 blur-3xl opacity-10 animate-pulse" /> */}
      <h2>Register your place</h2>
      <p className="w-[70%] text-center">
        {" "}
        Are you interested in a career in nursing? To register your place,
        please e-mail{" "}
        <a
          className="text-blue-600 font-bold"
          href="mailto:study.nursing@lthtr.nhs.uk?subject=Nursing Career Clinic&body=Hello, I would like to register a place at the Nursing Career Clinic."
        >
          study.nursing@lthtr.nhs.uk{" "}
        </a>
        with your preferred date and a member of the team will be in touch to
        confirm your place.
      </p>

      <a
        href="mailto:study.nursing@lthtr.nhs.uk?subject=Nursing Career Clinic&body=Hello, I would like to register a place at the Nursing Career Clinic."
        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Register now
      </a>
    </div>
  );
}
