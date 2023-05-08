import React from 'react'
import './style/Dev.css'

function Dev() {
  return (
    <div>
      <div className="dev-heading">
        <div className="heading">
          <h2>Developers</h2>
        </div>
        <div className="divider">
          <hr />
          <select name="sort" id="relevant-select">
            <option value="newest">Newest</option>
            <option value="most-popular">Most Popular</option>
            <option value="most-skilled">Most Skilled</option>
          </select>
        </div>
      </div>
      <div className="developers-list">
        <div className="developer-card">
          <div className="developer-image">
            <img src="https://picsum.photos/100/100" alt="dev" />
          </div>
          <div className="developer-info">
            <div className="developer-name">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                Rohan
              </a>
            </div>
            <div className="developer-Skills">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
              <div className="skill">JavaScript</div>
              <div className="skill">JavaScript</div>
              <div className="skill">JavaScript</div>

              <div className="skill">JavaScript</div>
            </div>
          </div>
          <div className="hire-tem">
            <p>5$ per hour</p>
            <button className="hire-developer">Hire</button>
          </div>
        </div>
        <div className="developer-card">
          <div className="developer-image">
            <img src="https://picsum.photos/100/100" alt="dev" />
          </div>
          <div className="developer-info">
            <div className="developer-name">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                Rohan
              </a>
            </div>
            <div className="developer-Skills">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">CSS</div>
              <div className="skill">CSS</div>
              <div className="skill">CSS</div>
              <div className="skill">CSS</div>
              <div className="skill">CSS</div>

              <div className="skill">JavaScript</div>
            </div>
          </div>
          <div className="hire-tem">
            <p>5$ per hour</p>
            <button className="hire-developer">Hire</button>
          </div>
        </div>
        <div className="developer-card">
          <div className="developer-image">
            <img src="https://picsum.photos/100/100" alt="dev" />
          </div>
          <div className="developer-info">
            <div className="developer-name">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                Rohan
              </a>
            </div>
            <div className="developer-Skills">
              <div className="skill">HTML</div>

              <div className="skill">HTML</div>
              <div className="skill">HTML</div>
              <div className="skill">HTML</div>
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
            </div>
          </div>
          <div className="hire-tem">
            <p>5$ per hour</p>
            <button className="hire-developer">Hire</button>
          </div>
        </div>
        <div className="developer-card">
          <div className="developer-image">
            <img src="https://picsum.photos/100/100" alt="dev" />
          </div>
          <div className="developer-info">
            <div className="developer-name">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                Rohan
              </a>
            </div>
            <div className="developer-Skills">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
            </div>
          </div>
          <div className="hire-tem">
            <p>5$ per hour</p>
            <button className="hire-developer">Hire</button>
          </div>
        </div>
        <div className="developer-card">
          <div className="developer-image">
            <img src="https://picsum.photos/100/100" alt="dev" />
          </div>
          <div className="developer-info">
            <div className="developer-name">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                Rohan
              </a>
            </div>
            <div className="developer-Skills">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
            </div>
          </div>
          <div className="hire-tem">
            <p>5$ per hour</p>
            <button className="hire-developer">Hire</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dev
