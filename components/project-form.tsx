"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  brief: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", company: "", email: "", brief: "" };

export function ProjectForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const updateValue = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Tell us who we should call you.";
    if (!values.company.trim()) nextErrors.company = "A company or project name helps us place the brief.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (values.brief.trim().length < 12) nextErrors.brief = "Give us a little more to work with.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/ajinkyamoghe2@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          message: values.brief.trim(),
          _subject: "New Cine Glam project enquiry",
          _template: "table",
          _honey: "",
        }),
      });

      const result = await response.json();
      if (!response.ok || result.success === false) throw new Error("Form submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError("We couldn't send your enquiry. Please email ajinkyamoghe2@gmail.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <p className="eyebrow">Enquiry received / 01</p>
        <h2>Thanks. We&apos;ll be in touch.</h2>
        <p>Your note is ready for the next conversation. We&apos;ll come back to you shortly.</p>
        <button className="text-button" type="button" onClick={() => { setSubmitted(false); setValues(initialState); }}>
          Send another enquiry <span aria-hidden="true">↗</span>
        </button>
      </div>
    );
  }

  return (
    <form className="project-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={values.name} onChange={(event) => updateValue("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name ? <p className="field-error" id="name-error">{errors.name}</p> : null}
      </div>
      <div className="form-field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" value={values.company} onChange={(event) => updateValue("company", event.target.value)} aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} />
        {errors.company ? <p className="field-error" id="company-error">{errors.company}</p> : null}
      </div>
      <div className="form-field form-field--full">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
        {errors.email ? <p className="field-error" id="email-error">{errors.email}</p> : null}
      </div>
      <div className="form-field form-field--full">
        <label htmlFor="brief">Project brief</label>
        <textarea id="brief" name="brief" rows={6} value={values.brief} onChange={(event) => updateValue("brief", event.target.value)} aria-invalid={Boolean(errors.brief)} aria-describedby={errors.brief ? "brief-error" : undefined} />
        {errors.brief ? <p className="field-error" id="brief-error">{errors.brief}</p> : null}
      </div>
      <div className="form-actions form-field--full">
        {submitError ? <p className="field-error" role="alert">{submitError}</p> : null}
        <button className="button button--ink" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send Enquiry"} <span aria-hidden="true">↗</span>
        </button>
        <span>We reply with a human, not a sequence.</span>
      </div>
    </form>
  );
}
