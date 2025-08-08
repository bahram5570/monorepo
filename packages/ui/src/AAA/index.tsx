// @ts-ignore
import f from '@repo/assets/images/avatar.png'

const AAA = ({ name }: { name: 'a' | 'b' }) => {
  return (
    <div>
      <p className="text-[30px] text-cyan-600">Hello from AAA</p>
      <img src={f} alt="Avatar" className='w-12 h-12' />
    </div>
  );
};

export default AAA;
