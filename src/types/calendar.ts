// Shared calendar-related TypeScript types used across the app.

export interface RescheduleRequestEvent {
  _id: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
  startTime: string; // HH:MM
  endTime: string; // HH:MM
  priority: string;
  description?: string;
  notes?: string;
}

export interface RescheduleRequest {
  events: RescheduleRequestEvent[];
  disasterDescription: string;
  weatherAlert?: string;
  language: string;
  currentDate: string;
}

export interface RescheduledEvent {
  _id: string;
  newDate: string; // YYYY-MM-DD
  newStartTime: string; // HH:MM
  newEndTime: string; // HH:MM
  reason: string;
  actionAdvice: string;
}

export interface RescheduleResponse {
  summary: string;
  rescheduledEvents: RescheduledEvent[];
  generalAdvice: string;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
}
