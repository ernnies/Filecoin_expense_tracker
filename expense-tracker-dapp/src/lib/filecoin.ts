import { ExpectedEarning, Invoice, Transaction, SavingsGoal, NotificationSettings } from './types';

export async function storeEarning(earning: ExpectedEarning): Promise<void> {
  console.log('Storing earning:', earning);
}

export async function storeInvoice(invoice: Invoice): Promise<void> {
  console.log('Storing invoice:', invoice);
}

export async function storeTransaction(transaction: Transaction): Promise<void> {
  console.log('Storing transaction:', transaction);
}

export async function storeSavingsGoal(goal: SavingsGoal): Promise<void> {
  console.log('Storing savings goal:', goal);
}

export async function storeNotificationSettings(settings: NotificationSettings): Promise<void> {
  console.log('Storing notification settings:', settings);
}