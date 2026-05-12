"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Users } from "lucide-react";
import { privateRooms } from "@/data/private-dining";

interface EnquiryForm {
  name: string;
  email: string;
  phone: string;
  room: string;
  date: string;
  guests: string;
  details: string;
}

export default function PrivateDiningPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryForm>();

  const onSubmit = () => {
    setSubmitted(true);
  };

  const roomOptions = privateRooms.map((r) => ({
    value: r.name,
    label: `${r.name} (${r.capacity.min}–${r.capacity.max} guests)`,
  }));

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll>
          <SectionHeading
            subtitle="Exclusive Spaces"
            title="Private Dining"
            as="h1"
          />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <p
            className="font-body text-brand-muted"
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 64px",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Whether celebrating an intimate milestone or hosting a corporate
            gathering, our private dining rooms offer bespoke experiences
            with dedicated service and tailored menus.
          </p>
        </AnimateOnScroll>

        {/* Room cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "64px",
            marginBottom: "96px",
          }}
        >
          {privateRooms.map((room, i) => (
            <AnimateOnScroll key={room.name} delay={i * 0.15}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center`}
                style={{ gap: "48px" }}
              >
                <div
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div>
                  <h2
                    className="font-heading text-brand-cream"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      marginBottom: "16px",
                    }}
                  >
                    {room.name}
                  </h2>

                  <div
                    className="flex items-center text-brand-champagne"
                    style={{ gap: "8px", marginBottom: "16px" }}
                  >
                    <Users size={16} aria-hidden="true" />
                    <span
                      className="font-accent"
                      style={{ fontSize: "14px" }}
                    >
                      {room.capacity.min}–{room.capacity.max} guests
                    </span>
                  </div>

                  <p
                    className="font-body text-brand-muted"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.7,
                      marginBottom: "20px",
                    }}
                  >
                    {room.description}
                  </p>

                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="font-body text-brand-cream/70"
                        style={{ fontSize: "14px" }}
                      >
                        <span className="text-brand-champagne" style={{ marginRight: "8px" }}>
                          —
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Enquiry form */}
        <div
          className="bg-brand-dark"
          style={{ padding: "64px 24px" }}
        >
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <AnimateOnScroll>
              <SectionHeading
                subtitle="Get in Touch"
                title="Private Dining Enquiry"
              />
            </AnimateOnScroll>

            {submitted ? (
              <div style={{ textAlign: "center" }}>
                <h3
                  className="font-heading text-brand-cream"
                  style={{ fontSize: "1.5rem", marginBottom: "16px" }}
                >
                  Thank You
                </h3>
                <p
                  className="font-body text-brand-muted"
                  style={{ fontSize: "15px" }}
                >
                  We&apos;ve received your enquiry and will be in touch within 48 hours.
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
                    {...register("name", { required: "Name is required" })}
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
                    {...register("phone", { required: "Phone is required" })}
                    error={errors.phone?.message}
                  />
                  <Select
                    label="Preferred Room"
                    options={roomOptions}
                    {...register("room")}
                  />
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{ gap: "24px" }}
                >
                  <Input
                    label="Preferred Date"
                    type="date"
                    {...register("date")}
                  />
                  <Input
                    label="Number of Guests"
                    type="number"
                    {...register("guests")}
                  />
                </div>

                <Textarea
                  label="Tell Us About Your Event"
                  placeholder="Type of event, menu preferences, any special requirements..."
                  {...register("details")}
                />

                <div>
                  <Button type="submit" variant="primary" size="lg">
                    Submit Enquiry
                  </Button>
                </div>

                <p
                  className="font-body text-brand-muted"
                  style={{ fontSize: "13px" }}
                >
                  This is a demo website. No enquiry will be sent.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
