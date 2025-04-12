export const Card = async () => {
  const data = await fetch('https://api.adviceslip.com/advice');
  const res = await data.json();
  const { slip } = res;
  return (
    <div>
      <h1>Random Number</h1>
      <h2>{slip.id}</h2>
      <p>{slip.advice}</p>
    </div>
  )
}
