/*
                            # ┌────────────── second (optional)
                            # │ ┌──────────── minute
                            # │ │ ┌────────── hour
                            # │ │ │ ┌──────── day of month
                            # │ │ │ │ ┌────── month
                            # │ │ │ │ │ ┌──── day of week
                            # │ │ │ │ │ │
                            # │ │ │ │ │ │
                            # * * * * * *
*/
export const CRON_SCHEDULE = "* * 0 * * *"; // Run task an every hour
export const KNEX_BATCH_CHUNK_SIZE = 100;
export const GOOGLE_SPREADSHEET_DATA_CHUNK_SIZE = 5000; // Google Sheets API row insert limit
