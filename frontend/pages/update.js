import UpdateItem from '../components/UpdateItem';

const Sell = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

//Descrictured props Same as:
// const Sell = props => (
//   <div>
//     <UpdateItem id={props.query.id} />
//   </div>
// );

export default Sell;
