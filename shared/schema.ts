import { pgTable, text, serial, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  serviceInterest: text("service_interest"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(), // Lucide icon name
  imageUrl: text("image_url"),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"), // e.g. "Patient since 2020"
  content: text("content").notNull(),
  rating: integer("rating").default(5),
  avatarUrl: text("avatar_url"),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });
export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Service = typeof services.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
