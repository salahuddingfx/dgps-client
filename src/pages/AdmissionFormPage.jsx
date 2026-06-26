import { useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import {
  User,
  Users,
  FileUp,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Loader2,
  Upload,
  X,
} from "lucide-react";

const classOptions = [
  { value: "play", label: "Play Group" },
  { value: "nursery", label: "Nursery" },
  { value: "class-one", label: "Class One" },
];

const bloodGroupOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const step1Schema = z.object({
  studentName: z.string().min(2, "Student name must be at least 2 characters"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  bloodGroup: z.string().optional(),
  classApplying: z.string().min(1, "Please select a class"),
  previousSchool: z.string().optional(),
});

const step2Schema = z.object({
  fatherName: z.string().min(2, "Father's name must be at least 2 characters"),
  motherName: z.string().min(2, "Mother's name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  address: z.string().min(5, "Address must be at least 5 characters"),
  occupation: z.string().optional(),
});

const step3Schema = z.object({
  birthCertificate: z.any().optional(),
  studentPhoto: z.any().optional(),
  schoolCertificate: z.any().optional(),
});

const schemas = [step1Schema, step2Schema, step3Schema];
const stepLabels = ["Student Information", "Parent / Guardian", "Documents"];
const stepIcons = [User, Users, FileUp];

function FileUploadField({ name, label, accept, preview, onFileChange, onRemove }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-heading mb-1.5">{label}</label>
      {preview ? (
        <div className="relative w-full rounded-xl border border-border overflow-hidden">
          <img
            src={preview}
            alt={label}
            className="w-full h-48 object-cover"
          />
          <button
            type="button"
            onClick={onRemove}
            className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/90 hover:bg-white text-danger shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-40 rounded-xl border-2 border-dashed border-border hover:border-primary-400 bg-primary-50/30 cursor-pointer transition-colors">
          <Upload className="w-8 h-8 text-primary-400 mb-2" />
          <span className="text-sm text-paragraph">Click to upload {label.toLowerCase()}</span>
          <span className="text-xs text-paragraph/60 mt-1">JPG, PNG up to 2MB</span>
          <input
            type="file"
            accept={accept}
            className="hidden"
            onChange={onFileChange}
          />
        </label>
      )}
    </div>
  );
}

export default function AdmissionFormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [previews, setPreviews] = useState({});

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemas[currentStep]),
    mode: "onTouched",
  });

  const watchedFiles = watch(["birthCertificate", "studentPhoto", "schoolCertificate"]);

  const handleFileChange = useCallback(
    (fieldName, file) => {
      if (file && file[0]) {
        const fileObj = file[0];
        setValue(fieldName, fileObj, { shouldValidate: true });
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews((prev) => ({ ...prev, [fieldName]: reader.result }));
        };
        reader.readAsDataURL(fileObj);
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(
    (fieldName) => {
      setValue(fieldName, undefined, { shouldValidate: true });
      setPreviews((prev) => ({ ...prev, [fieldName]: null }));
    },
    [setValue]
  );

  const handleFileInput = (fieldName) => (e) => {
    handleFileChange(fieldName, e.target.files);
  };

  const goNext = async () => {
    const valid = await trigger();
    if (valid) {
      setCurrentStep((s) => Math.min(s + 1, 2));
    }
  };

  const goBack = () => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  };

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>{PAGE_SEO.admissionForm.title}</title>
          <meta name="description" content={PAGE_SEO.admissionForm.description} />
          <meta property="og:title" content={PAGE_SEO.admissionForm.title} />
          <meta property="og:description" content={PAGE_SEO.admissionForm.description} />
          <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.admissionForm.image}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={PAGE_SEO.admissionForm.title} />
          <meta name="twitter:description" content={PAGE_SEO.admissionForm.description} />
          <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.admissionForm.image}`} />
        </Helmet>

        <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Admission", path: "/admission" }, { label: "Apply" }]} />

        <PageHeader
          title="Admission Application"
          description="Submit your child's admission application online."
          breadcrumbs={[{ label: "Admission", path: "/admission" }, { label: "Apply" }]}
        />

        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="max-w-lg mx-auto text-center">
              <ScrollReveal>
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-heading font-poppins mb-3">
                  Application Submitted Successfully!
                </h2>
                <p className="text-paragraph mb-2">
                  Thank you for applying to Dhuapalong Govt. Primary School.
                </p>
                <p className="text-paragraph text-sm mb-8">
                  Your application reference number is <span className="font-mono font-bold text-primary-600">ADM-2026-{Math.floor(1000 + Math.random() * 9000)}</span>. We will review your application and contact you within 3-5 working days.
                </p>
                <Button onClick={() => window.location.reload()}>Submit Another Application</Button>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.admissionForm.title}</title>
        <meta name="description" content={PAGE_SEO.admissionForm.description} />
        <meta property="og:title" content={PAGE_SEO.admissionForm.title} />
        <meta property="og:description" content={PAGE_SEO.admissionForm.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.admissionForm.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.admissionForm.title} />
        <meta name="twitter:description" content={PAGE_SEO.admissionForm.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.admissionForm.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Admission", path: "/admission" }, { label: "Apply" }]} />

      <PageHeader
        title="Admission Application"
        description="Fill out the form below to apply for your child's admission."
        breadcrumbs={[{ label: "Admission", path: "/admission" }, { label: "Apply" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-10">
              {stepLabels.map((label, i) => {
                const Icon = stepIcons[i];
                return (
                  <div key={i} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                          i < currentStep
                            ? "bg-green-500 text-white"
                            : i === currentStep
                            ? "bg-primary-500 text-white"
                            : "bg-gray-100 text-paragraph"
                        }`}
                      >
                        {i < currentStep ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Icon className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-xs mt-2 text-center text-paragraph hidden sm:block">{label}</span>
                    </div>
                    {i < 2 && (
                      <div
                        className={`h-0.5 flex-1 mx-3 rounded transition-colors ${
                          i < currentStep ? "bg-green-500" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
              <form onSubmit={(e) => e.preventDefault()}>
                {/* Step 1: Student Info */}
                {currentStep === 0 && (
                  <ScrollReveal>
                    <h3 className="text-lg font-semibold text-heading font-poppins mb-6">Student Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Student Full Name *"
                        placeholder="Enter student's full name"
                        error={errors.studentName?.message}
                        {...register("studentName")}
                      />
                      <Input
                        label="Date of Birth *"
                        type="date"
                        error={errors.dateOfBirth?.message}
                        {...register("dateOfBirth")}
                      />
                      <Select
                        label="Gender *"
                        options={genderOptions}
                        placeholder="Select gender"
                        error={errors.gender?.message}
                        {...register("gender")}
                      />
                      <Select
                        label="Blood Group"
                        options={bloodGroupOptions}
                        placeholder="Select blood group"
                        {...register("bloodGroup")}
                      />
                      <Select
                        label="Class Applying For *"
                        options={classOptions}
                        placeholder="Select class"
                        error={errors.classApplying?.message}
                        {...register("classApplying")}
                      />
                      <Input
                        label="Previous School"
                        placeholder="Name of previous school (if any)"
                        {...register("previousSchool")}
                      />
                    </div>
                  </ScrollReveal>
                )}

                {/* Step 2: Parent Info */}
                {currentStep === 1 && (
                  <ScrollReveal>
                    <h3 className="text-lg font-semibold text-heading font-poppins mb-6">Parent / Guardian Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Father's Name *"
                        placeholder="Enter father's name"
                        error={errors.fatherName?.message}
                        {...register("fatherName")}
                      />
                      <Input
                        label="Mother's Name *"
                        placeholder="Enter mother's name"
                        error={errors.motherName?.message}
                        {...register("motherName")}
                      />
                      <Input
                        label="Phone Number *"
                        placeholder="e.g. +880-1700-000000"
                        error={errors.phone?.message}
                        {...register("phone")}
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="parent@example.com"
                        error={errors.email?.message}
                        {...register("email")}
                      />
                      <div className="md:col-span-2">
                        <Input
                          label="Address *"
                          placeholder="Enter full address"
                          error={errors.address?.message}
                          {...register("address")}
                        />
                      </div>
                      <Input
                        label="Occupation"
                        placeholder="Father's / Guardian's occupation"
                        {...register("occupation")}
                      />
                    </div>
                  </ScrollReveal>
                )}

                {/* Step 3: Documents */}
                {currentStep === 2 && (
                  <ScrollReveal>
                    <h3 className="text-lg font-semibold text-heading font-poppins mb-6">Upload Documents</h3>
                    <p className="text-paragraph text-sm mb-6">
                      Upload clear scanned copies or photos of the following documents.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <FileUploadField
                        name="birthCertificate"
                        label="Birth Certificate"
                        accept="image/*"
                        preview={previews.birthCertificate}
                        onFileChange={handleFileInput("birthCertificate")}
                        onRemove={() => handleRemoveFile("birthCertificate")}
                      />
                      <FileUploadField
                        name="studentPhoto"
                        label="Student Photo"
                        accept="image/*"
                        preview={previews.studentPhoto}
                        onFileChange={handleFileInput("studentPhoto")}
                        onRemove={() => handleRemoveFile("studentPhoto")}
                      />
                      <FileUploadField
                        name="schoolCertificate"
                        label="Previous School Certificate"
                        accept="image/*"
                        preview={previews.schoolCertificate}
                        onFileChange={handleFileInput("schoolCertificate")}
                        onRemove={() => handleRemoveFile("schoolCertificate")}
                      />
                    </div>
                  </ScrollReveal>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  {currentStep > 0 ? (
                    <Button type="button" variant="outline" onClick={goBack}>
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </Button>
                  ) : (
                    <div />
                  )}
                  {currentStep < 2 ? (
                    <Button type="button" onClick={goNext}>
                      Next Step
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button type="button" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
