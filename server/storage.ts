import { db } from "./db";
import { inquiries, services, testimonials, type Inquiry, type InsertInquiry, type Service, type Testimonial } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getServices(): Promise<Service[]>;
  getTestimonials(): Promise<Testimonial[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async seedData(): Promise<void> {
    // Seed Services if empty
    const existingServices = await this.getServices();
    if (existingServices.length === 0) {
      await db.insert(services).values([
        {
          title: "Cosmetic Dentistry",
          description: "Transform your smile with veneers, whitening, and more.",
          icon: "Sparkles",
        },
        {
          title: "Orthodontics",
          description: "Straighten your teeth with modern aligners and braces.",
          icon: "Smile",
        },
        {
          title: "General Care",
          description: "Routine checkups and cleanings for lifelong oral health.",
          icon: "Stethoscope",
        },
        {
          title: "Implants",
          description: "Permanent solutions for missing teeth using state-of-the-art technology.",
          icon: "Hammer", // Placeholder icon name
        }
      ]);
    }

    // Seed Testimonials if empty
    const existingTestimonials = await this.getTestimonials();
    if (existingTestimonials.length === 0) {
      await db.insert(testimonials).values([
        {
          name: "Sarah Johnson",
          role: "Patient",
          content: "The best dental experience I've ever had. Professional and painless!",
          rating: 5,
        },
        {
          name: "Michael Chen",
          role: "Patient",
          content: "Dr. Smith transformed my smile. Highly recommend the whitening service.",
          rating: 5,
        },
        {
          name: "Emily Davis",
          role: "Patient",
          content: "State of the art facility and the staff makes you feel so comfortable.",
          rating: 5,
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
