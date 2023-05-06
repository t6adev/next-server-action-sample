import ButtonWithStartTransition from './ButtonWithStartTransition';
import ButtonWithoutStartTransition from './ButtonWithoutStartTransition';

export default function Home() {
  const action = async () => {
    'use server';
    console.log('hello server action');
  };
  return (
    <main>
      <form action={action}>
        <button type="submit">click</button>
      </form>
      <form>
        <button formAction={action}>click</button>
      </form>
      <ButtonWithStartTransition />
      <ButtonWithoutStartTransition />
    </main>
  );
}
