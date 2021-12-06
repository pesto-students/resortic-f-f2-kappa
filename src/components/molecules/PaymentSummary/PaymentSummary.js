import React from "react";
import AccordionComponent from "../../atoms/Accordion/Accordion-Component";
import { Divider, Row, Col } from "antd";

export default function PaymentSummary() {
  return (
    <div>
      <AccordionComponent title="Price Summary">
        <Row gutter={32}>
          <Col span={18}>
            <p>Room Charges(1 room x 1 night)</p>
          </Col>
          <Col span={6}>
            <p>₹300</p>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={18}>
            <p>Total Discount</p>
          </Col>
          <Col span={6}>
            <p>₹100</p>
          </Col>
        </Row>
        <Divider />
        <Row gutter={32}>
          <Col span={18}>
            <p>Price after Discount</p>
          </Col>
          <Col span={6}>
            <p>₹200</p>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={18}>
            <p>Taxes and fees</p>
          </Col>
          <Col span={6}>
            <p>₹30</p>
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
              <strong>₹230</strong>
            </p>
          </Col>
        </Row>
      </AccordionComponent>
    </div>
  );
}
