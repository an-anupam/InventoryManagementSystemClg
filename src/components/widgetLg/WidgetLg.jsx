import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cricfit.com/wp-content/uploads/2021/08/Disappointed-Pakistan-Fan.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Anupam Mohanty</span>
          </td>
          <td className="widgetLgDate">1 Mar 2021</td>
          <td className="widgetLgAmount"> ₹ 12,200</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://didikebolo.com/assets/images/didi_bw14pd.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Suraj Roy</span>
          </td>
          <td className="widgetLgDate">1 Mar 2022</td>
          <td className="widgetLgAmount"> ₹ 10,500</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://wpdaddy.com/wp-content/uploads/2020/11/thispersondoesnotexist.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nikhil Barik</span>
          </td>
          <td className="widgetLgDate">28 Feb 2022</td>
          <td className="widgetLgAmount"> ₹18,500</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://preview.redd.it/cpslext1vx971.png?auto=webp&s=a67d767ddec283c3490613cdb0b40c180a33daf6"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ashish Panda </span>
          </td>
          <td className="widgetLgDate">27 Feb 2022</td>
          <td className="widgetLgAmount">₹11,400</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img
            src="https://img.jagranjosh.com/imported/images/E/GK/mark-zuckerberg-biography%20(1).jpg"
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">Mark Zukerbergs </span>
        </td>
        <td className="widgetLgDate">26 Feb 2022</td>
        <td className="widgetLgAmount">₹17,600</td>
        <td className="widgetLgStatus">
          <Button type="Approved" />
        </td>
      </tr>
      <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202107/Mukesh_Ambani__Indian_Business-1200x768.jpg?6KLhIiJZFIemLUkNZIh.rN7RtE5__8nw"
          alt=""
          className="widgetLgImg"
        />
        <span className="widgetLgName"> Mukesh Ambani </span>
      </td>
      <td className="widgetLgDate">26 Feb 2022</td>
      <td className="widgetLgAmount">₹11,400</td>
      <td className="widgetLgStatus">
        <Button type="Declined" />
      </td>
    </tr>
    <tr className="widgetLgTr">
    <td className="widgetLgUser">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/Harshad_Mehta.jpg"
        alt=""
        className="widgetLgImg"
      />
      <span className="widgetLgName">Harshad Meheta</span>
    </td>
    <td className="widgetLgDate">25 Feb 2022</td>
    <td className="widgetLgAmount">₹13,460</td>
    <td className="widgetLgStatus">
      <Button type="Pending" />
    </td>
  </tr>
   <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ratan_Tata_photo.jpg/220px-Ratan_Tata_photo.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName"> Ratan Tata </span>
          </td>
          <td className="widgetLgDate">24 feb 2022</td>
          <td className="widgetLgAmount">₹9,400</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}