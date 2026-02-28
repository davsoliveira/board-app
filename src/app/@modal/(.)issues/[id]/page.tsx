import { IssueDetails } from "@/app/issues/[id]/issue-details";
import { BackButton } from "./back-button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Modal } from "@/components/modal";

interface IssuePageProps {
  params: Promise<{ id: string }>;
}

export default async function IssueModal({ params }: IssuePageProps) {
  const { id } = await params;

  return (
    <Modal>
      <div className="flex flex-col gap-4 p-6">
        <BackButton />

        <DialogTitle className="sr-only">Issue details</DialogTitle>

        <IssueDetails issueId={id} />
      </div>
    </Modal>
  );
}
