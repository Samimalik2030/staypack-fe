export enum TaskStatus {
  PENDING = "pending",
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
  ARCHIVED = "archived",
}

export enum TaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export enum TaskRecurrence {
  DAILY = "daily",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

export enum TaskCategory {
  WORK = "work",
  PERSONAL = "personal",
  STUDY = "study",
  FITNESS = "fitness",
  SHOPPING = "shopping",
  HEALTH = "health",
  FINANCE = "finance",
  TRAVEL = "travel",
  ENTERTAINMENT = "entertainment",
  HOUSEHOLD = "household",
  SOCIAL = "social",
  PROJECT = "project",
  URGENT = "urgent",
  OTHER = "other",
}

export interface UpdateFormValues {
  title?: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  dueDate?: Date | string;
  startDate?: Date | string;
  isRecurring?: boolean;
  recurrenceType?: "daily" | "weekly" | "monthly" | "yearly";
  category?:
    | "work"
    | "personal"
    | "study"
    | "fitness"
    | "shopping"
    | "health"
    | "finance"
    | "travel"
    | "entertainment"
    | "household"
    | "social"
    | "project"
    | "urgent"
    | "other";
  notes?: string;
}
