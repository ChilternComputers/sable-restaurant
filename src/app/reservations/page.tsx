"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Clock, Phone, Mail, MapPin } from "lucide-react";

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
}

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationForm>();

  const onSubmit = () => {
    setSubmitted(true);
  };

  const timeOptions = [
    { value: "18:00", label: "6:00 PM" },
    { value: "18:30", label: "6:30 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "19:30", label: "7:30 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "20:30", label: "8:30 PM" },
    { value: "21:00", label: "9:00 PM" },
  ];

  const guestOptions = [
    { value: "1", label: "1 Guest" },
    { value: "2", label: "2 Guests" },
    { value: "3", label: "3 Guests" },
    { value: "4", label: "4 Guests" },
    { value: "5", label: "5 Guests" },
    { value: "6", label: "6 Guests" },
    { value: "7-8", label: "7-8 Guests" },
    { value: "9+", label: "9+ (Private Dining)" },
  ];

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll>
          <SectionHeading
            subtitle="Your Table Awaits"
            title="Reservations"
            as="h1"
          />
        </AnimateOnScroll>

        <div
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{ gap: "64px" }}
        >
          {/* Form */}
          <div className="lg:col-span-2">
            <AnimateOnScroll delay={0.1}>
              {submitted ? (
                <div
                  className="bg-brand-surface border border-brand-champagne/20"
                  style={{ padding: "48px", textAlign: "center" }}
                >
                  <h3
                    className="font-heading text-brand-cream"
                    style={{ fontSize: "1.5rem", marginBottom: "16px" }}
                  >
                    Thank You
                  </h3>
                  <p
                    className="font-body text-brand-muted"
                    style={{ fontSize: "15px", lineHeight: 1.7 }}
                  >
                    Your reservation request has been received. We&apos;ll
                    confirm your booking by email within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: "24px" }}
                  >
                    <Input
                      label="Full Name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                      error={errors.name?.message}
                    />
                    <Input
                      label="Email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      error={errors.email?.message}
                    />
                  </div>

                  <div
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: "24px" }}
                  >
                    <Input
                      label="Phone"
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      error={errors.phone?.message}
                    />
                    <Input
                      label="Date"
                      type="date"
                      {...register("date", {
                        required: "Date is required",
                      })}
                      error={errors.date?.message}
                    />
                  </div>

                  <div
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: "24px" }}
                  >
                    <Select
                      label="Preferred Time"
                      options={timeOptions}
                      {...register("time", {
                        required: "Please select a time",
                      })}
                      error={errors.time?.message}
                    />
                    <Select
                      label="Party Size"
                      options={guestOptions}
                      {...register("guests", {
                        required: "Please select party size",
                      })}
                      error={errors.guests?.message}
                    />
                  </div>

                  <Textarea
                    label="Special Requests"
                    placeholder="Dietary requirements, celebrations, seating preferences..."
                    {...register("requests")}
                  />

                  <div>
                    <Button type="submit" variant="primary" size="lg">
                      Request Reservation
                    </Button>
                  </div>

                  <p
                    className="font-body text-brand-muted"
                    style={{ fontSize: "13px" }}
                  >
                    This is a demo website. No reservation will be made.
                  </p>
                </form>
              )}
            </AnimateOnScroll>
          </div>

          {/* Sidebar */}
          <div>
            <AnimateOnScroll delay={0.2}>
              <div
                className="bg-brand-surface border border-brand-muted/10"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                <div>
                  <div
                    className="flex items-center text-brand-champagne"
                    style={{ gap: "12px", marginBottom: "12px" }}
                  >
                    <Clock size={18} aria-hidden="true" />
                    <h2
                      className="font-accent uppercase"
                      style={{ fontSize: "12px", letterSpacing: "0.15em" }}
                    >
                      Opening Hours
                    </h2>
                  </div>
                  <div
                    className="font-body text-brand-muted"
                    style={{ fontSize: "14px", lineHeight: 2 }}
                  >
                    <p>Tue – Thu: 6:00 pm – 10:00 pm</p>
                    <p>Fri – Sat: 12:00 pm – 2:30 pm, 6:00 pm – 10:30 pm</p>
                    <p>Sunday: 12:00 pm – 4:00 pm</p>
                    <p>Monday: Closed</p>
                  </div>
                </div>

                <div>
                  <div
                    className="flex items-center text-brand-champagne"
                    style={{ gap: "12px", marginBottom: "12px" }}
                  >
                    <Phone size={18} aria-hidden="true" />
                    <h2
                      className="font-accent uppercase"
                      style={{ fontSize: "12px", letterSpacing: "0.15em" }}
                    >
                      Phone
                    </h2>
                  </div>
                  <a
                    href="tel:+442079460958"
                    className="font-body text-brand-muted hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                    style={{ fontSize: "14px" }}
                  >
                    020 7946 0958
                  </a>
                </div>

                <div>
                  <div
                    className="flex items-center text-brand-champagne"
                    style={{ gap: "12px", marginBottom: "12px" }}
                  >
                    <Mail size={18} aria-hidden="true" />
                    <h2
                      className="font-accent uppercase"
                      style={{ fontSize: "12px", letterSpacing: "0.15em" }}
                    >
                      Email
                    </h2>
                  </div>
                  <a
                    href="mailto:hello@sablerestaurant.co.uk"
                    className="font-body text-brand-muted hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                    style={{ fontSize: "14px" }}
                  >
                    hello@sablerestaurant.co.uk
                  </a>
                </div>

                <div>
                  <div
                    className="flex items-center text-brand-champagne"
                    style={{ gap: "12px", marginBottom: "12px" }}
                  >
                    <MapPin size={18} aria-hidden="true" />
                    <h2
                      className="font-accent uppercase"
                      style={{ fontSize: "12px", letterSpacing: "0.15em" }}
                    >
                      Address
                    </h2>
                  </div>
                  <p
                    className="font-body text-brand-muted"
                    style={{ fontSize: "14px", lineHeight: 1.7 }}
                  >
                    42 Fitzroy Square
                    <br />
                    London W1T 6EY
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
