import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^(\+880|880|0)?[13-9]\d{8}$/, "Please enter a valid Bangladeshi phone number").optional().or(z.literal("")),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(20, "Message must be at least 20 characters").max(2000),
});

export const admissionSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "other"], { required_error: "Gender is required" }),
  classApplying: z.string().min(1, "Please select a class"),
  fatherName: z.string().min(2, "Father's name is required"),
  motherName: z.string().min(2, "Mother's name is required"),
  phone: z.string().regex(/^(\+880|880|0)?[13-9]\d{8}$/, "Please enter a valid phone number"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  previousSchool: z.string().optional(),
});

export const searchSchema = z.object({
  query: z.string().min(1, "Search query is required").max(200),
});
