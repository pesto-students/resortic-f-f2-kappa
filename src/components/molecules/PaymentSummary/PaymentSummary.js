import React from "react";
import AccordionComponent from "../../atoms/Accordion/Accordion-Component";
import WithLoading from "../../../HOC/WithLoading";
import { Divider, Row, Col, Tag } from "antd";

export default WithLoading(function PaymentSummary({
  roomsNum,
  nightsNum,
  pricePerRoom,
  discount,
  isLoading
}) {
  const totalCharges = roomsNum * pricePerRoom * nightsNum;
  const discountAmount = Math.ceil(totalCharges* (discount/100));
  const priceToPay = totalCharges - discountAmount;
  const taxes = Math.ceil(priceToPay * 0.18);
  const totalAmount = priceToPay + taxes;
  

  return (
    <div>
      <AccordionComponent title="Price Summary">
        <Row gutter={32}>
          <Col span={18}>
            <p>Room Charges({roomsNum || 1} room x {nightsNum || 1} Day)</p>
          </Col>
          <Col span={6}>
            <p>{"₹"+ totalCharges}</p>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={18}>
            <p>Total Discount <Tag color="green">10% off</Tag></p>
          </Col>
          <Col span={6}>
            <p>{"₹"+ discountAmount}</p>
          </Col>
        </Row>
        <Divider />
        <Row gutter={32}>
          <Col span={18}>
            <p>Price after Discount</p>
          </Col>
          <Col span={6}>
            <p>{"₹"+ priceToPay}</p>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={18}>
            <p>Taxes and fees</p>
          </Col>
          <Col span={6}>
            <p>{"₹"+ taxes}</p>
          </Col>
        </Row>
        <Divider style={{ margin: "none" }} />
        <Row gutter={32}>
          <Col span={18}>
            <p>
              <strong>Payable now</strong>
            </p>
          </Col>
          <Col span={6}>
            <p>
              <strong>{"₹"+ totalAmount}</strong>
            </p>
          </Col>
        </Row>
      </AccordionComponent>
    </div>
  );
})
