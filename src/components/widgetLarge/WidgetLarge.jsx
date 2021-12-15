import React from 'react'
import '../../styles/WidgetLarge.css';

const widgetLarge = () => {
    const Button = ({type}) => {
        return (
            <button className={'widgetLargeBtn ' + type} >{type}</button>
        )
    }
    return (
        <div className='WidgetLarge' >
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
                        <img className="widgetLgImg" src="https://images.pexels.com/photos/2850989/pexels-photo-2850989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <span className="widgetLgName">Susan Carol</span>
                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmount">$122.00</td>
                      <td className="widgetLgStatus">
                        <Button type='Approved' />
                      </td>
                  </tr>
                  <tr className="widgetLgTr">
                      <td className="widgetLgUser">
                        <img className="widgetLgImg" src="https://images.pexels.com/photos/2850989/pexels-photo-2850989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <span className="widgetLgName">Susan Carol</span>
                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmount">$122.00</td>
                      <td className="widgetLgStatus">
                        <Button type='Declined' />
                      </td>
                  </tr>
                  <tr className="widgetLgTr">
                      <td className="widgetLgUser">
                        <img className="widgetLgImg" src="https://images.pexels.com/photos/2850989/pexels-photo-2850989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <span className="widgetLgName">Susan Carol</span>
                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmount">$122.00</td>
                      <td className="widgetLgStatus">
                        <Button type='Pending' />
                      </td>
                  </tr>
                  <tr className="widgetLgTr">
                      <td className="widgetLgUser">
                        <img className="widgetLgImg" src="https://images.pexels.com/photos/2850989/pexels-photo-2850989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <span className="widgetLgName">Susan Carol</span>
                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmount">$122.00</td>
                      <td className="widgetLgStatus">
                        <Button type='Approved' />
                      </td>
                  </tr>
              </table>
        </div>
    )
}

export default widgetLarge

