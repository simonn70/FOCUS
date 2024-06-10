import Card from '@/components/Card';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full  gap-5 text-white">
      <Card/>
      <Card/>
      


      {/* <MeetingTypeList /> */}
    </section>
  );
};

export default Home;
