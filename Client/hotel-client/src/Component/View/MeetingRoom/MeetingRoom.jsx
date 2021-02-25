import React, { Component } from "react";
import "./MeetingRoom.css";
import Banner from "../../Banner/Banner";
import NewIntro from "../../NewIntro/NewIntro";
import PreviewPage from "../../PreviewPage/PreviewPage";

class MeetingRoom extends Component {
  render() {
    return (
      <div className="meeting-room">
        <Banner />
        <NewIntro />
        <div className="extra-info">
          <div className="extra-info-container">
            {/* <h3 className="intro-title">Dịch vụ</h3> */}
            <p className="extra-info-content">
              Máy chiếu LCD, TV LCD và DVD, Màn hình lớn với con trỏ laser,
              Internet băng thông rộng, Bảng trắng với bút, Bảng lật và Bút đánh
              dấu, Máy tính xách tay, Hệ thống Micrô, Bục quảng cáo và Biểu ngữ
              thả sau, Miếng dán và Bút ghi chú.
            </p>
          </div>
        </div>
        <h3 className="intro-title">Phòng họp</h3>
        <div className="table-box">
            <table className="table">
                <thead className="thead">
                    <tr className="trow">
                        <th className="title">
                            PHÒNG
                        </th>
                        <th className="title">
                            RẠP HÁT
                        </th>
                        <th className="title">
                            HÌNH CHỮ U
                        </th>
                        <th className="title">
                            CHỖ NGỒI
                        </th>
                        <th className="title">
                            LỚP HỌC
                        </th>
                        <th className="title">
                            PHÒNG TIỆC
                        </th>
                        <th className="title">
                            CHIỀU CAO
                        </th>
                        <th className="title">
                            BỀ MẶT
                        </th>
                    </tr>
                </thead>
                <tbody className="tbody">
                <tr className="trow">
                        <th className="title">
                            Phòng đa chức năng
                        </th>
                        <th className="title">
                            100
                        </th>
                        <th className="title">
                            30
                        </th>
                        <th className="title">
                        
                        </th>
                        <th className="title">
                            70
                        </th>
                        <th className="title">
                            90
                        </th>
                        <th className="title">
                            
                        </th>
                        <th className="title">
                            110m2
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
        <PreviewPage/>
      </div>
    );
  }
}

export default MeetingRoom;
