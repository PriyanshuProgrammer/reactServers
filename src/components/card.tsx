'use server';
export const Card = async () => {
  const data = await fetch('https://api.adviceslip.com/advice');
  const res = await data.json();
  const { slip } = res;
  console.log("card comp")
  console.log(slip)
  return (
    <div>
      <h1>this is async comp</h1>
      <h2>{slip.id}</h2>
      <p>{slip.advice}</p>
    </div>
  )
}
