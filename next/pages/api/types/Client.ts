export type Client = {
  _id: string; //for now, it should be moongose.Types.ObjectId
  firstName: string;
  lastName: string;
  phoneNumber: {
    cell: string;
    work?: string;
    home?: string;
  };
  emailAddress: string;
  meetingDate: string;
  documentRef: string;
  progress: number;
  // response:
  // officeAnswers:
};
