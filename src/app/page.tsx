import ExerciseTable from '@/components/ExerciseTable/ExerciseTable';
import DevWrapper from '@/components/DevWrapper/DevWrapper';

export default function Home() {
  return (
    <DevWrapper enabled={true} title="Exercise Table">
      <ExerciseTable />
    </DevWrapper>
  );
}
