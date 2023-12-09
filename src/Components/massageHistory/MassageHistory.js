import React from 'react';
import "./massageHistory.css";

const MassageHistory = ({msg}) => {
    return msg.length > 0 ? (
        msg.map((row, i) => (
          <div key={i} className='massage-history mt-4'>
            <div className="send">
              <div className="sender font-weight-bold text-secondary">{row.messageBy}</div>
              <div className="date">{row.date}</div>
            </div>
            <div className="massage">{row.message}</div>
          </div>
        ))
      ) : (
        <div>No Chat Available</div>
      );
}

export default MassageHistory;
