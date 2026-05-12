import { cn } from "@/lib/utils";
import { forwardRef, useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

const inputStyles =
  "w-full bg-brand-surface border border-brand-muted/30 text-brand-cream font-body focus:border-brand-champagne focus:outline-none transition-colors duration-300";

const labelStyles =
  "block font-accent uppercase text-brand-muted";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, className, id, ...props }, ref) {
    const autoId = useId();
    const inputId = id || autoId;
    const errorId = `${inputId}-error`;
    return (
      <div>
        <label
          htmlFor={inputId}
          className={labelStyles}
          style={{ fontSize: "12px", letterSpacing: "0.15em", marginBottom: "8px" }}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(inputStyles, error && "border-brand-burgundy", className)}
          style={{ padding: "12px 16px", fontSize: "15px" }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-brand-burgundy font-body"
            style={{ fontSize: "13px", marginTop: "4px" }}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, error, className, id, ...props }, ref) {
    const autoId = useId();
    const inputId = id || autoId;
    const errorId = `${inputId}-error`;
    return (
      <div>
        <label
          htmlFor={inputId}
          className={labelStyles}
          style={{ fontSize: "12px", letterSpacing: "0.15em", marginBottom: "8px" }}
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(inputStyles, error && "border-brand-burgundy", className)}
          style={{ padding: "12px 16px", fontSize: "15px", minHeight: "120px", resize: "vertical" }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-brand-burgundy font-body"
            style={{ fontSize: "13px", marginTop: "4px" }}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ label, error, options, className, id, ...props }, ref) {
    const autoId = useId();
    const inputId = id || autoId;
    const errorId = `${inputId}-error`;
    return (
      <div>
        <label
          htmlFor={inputId}
          className={labelStyles}
          style={{ fontSize: "12px", letterSpacing: "0.15em", marginBottom: "8px" }}
        >
          {label}
        </label>
        <select
          ref={ref}
          id={inputId}
          className={cn(inputStyles, error && "border-brand-burgundy", className)}
          style={{ padding: "12px 16px", fontSize: "15px" }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...props}
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-brand-burgundy font-body"
            style={{ fontSize: "13px", marginTop: "4px" }}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
