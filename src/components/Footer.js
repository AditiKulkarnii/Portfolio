import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn, FaCode } from 'react-icons/fa' // Importing FaCode icon

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className="footer">
      <Row>
        
        <Col md="8" className="footer-copywright">
          <h3>Copyright © {year} AditiKulkarnii </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AditiKulkarnii"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aditi-kulkarnii"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://leetcode.com/u/akul28/" // LeetCode link
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode />  {/* Using the FaCode icon to represent LeetCode */}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
