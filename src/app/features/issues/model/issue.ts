export interface IssueListItem {
  id: string;
  title: string;
  dateSubmitted: string;
  description: string;
  assignedDeveloper: string;
  status: string;
  dateCompleted: string;
  commitHash: string;
}
