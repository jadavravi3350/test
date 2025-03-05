import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MessageLaw() {
const Lawyertoken = JSON.parse(localStorage.getItem("Lawyertoken"));

    const [user, setuser] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(
                    `https://lawyer-management-system-api.onrender.com/message/get-message/${id}/${Lawyertoken.lawyer._id}`
                );
                setuser(response.data);
                
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };

        fetchMessages();
    }, []);
  return (
    <div>
      <section className="MainMessageLaw">
        
          {/* <!-- Header --> */}
    <div class="messages-header">
        <h1>Messages</h1>
    </div>

    {/* <!-- Chat Container --> */}
    <div class="chat-container">
        {/* <!-- Profile and Name --> */}
        <div class="d-flex align-items-center mb-4">
            <div class="profile-pic">
                <img src="https://storage.googleapis.com/a1aa/image/tEoenbcQC-pMoau6zKX1th-riEUya33MZ6iiKDSfTtI.jpg" alt="Profile picture of Ravi Sir"/>
            </div>
            <span class="sender-name">Ravi Sir</span>
        </div>

        {/* <!-- Messages --> */}
        <div class="d-flex flex-column">
            {/* <!-- Received Message --> */}
            <div class="d-flex flex-column align-items-start mb-3">
                <div class="message-bubble received">
                    Lorem ipsum dolor sit amet is dummu.
                </div>
                <span class="message-time">08:00 pm</span>
            </div>

            {/* <!-- Sent Message --> */}
            <div class="d-flex flex-column align-items-end mb-3">
                <div class="message-bubble sent">
                    Yeah! It will be on time.
                </div>
                <span class="message-time">08:01 pm</span>
            </div>

            {/* <!-- Received Message --> */}
            <div class="d-flex flex-column align-items-start mb-3">
                <div class="message-bubble received">
                    Thank You!
                </div>
                <span class="message-time">08:00 pm</span>
            </div>
        </div>
    </div>

    {/* <!-- Input Box --> */}
    <div class="input-box">
        <input type="text" placeholder="Write here"/>
        <button>
            <i class="fas fa-paper-plane"></i>
        </button>
    </div>

      </section>
    </div>
  )
}

export default MessageLaw
