import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import { FiPlus } from 'react-icons/fi';

const IssuesPage = () => {
  return (
    <>
      <div className="m-5 ">
        <Link href="/issues/new">
          <Button size="3" variant="outline" style={{ cursor: 'pointer' }}>
            <FiPlus size={20} />
            New Ticket
          </Button>
        </Link>
      </div>
    </>
  );
};

export default IssuesPage;
