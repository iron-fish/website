/**
 * termynal.js
 * A lightweight, modern and extensible animated terminal window, using
 * async/await.
 *
 * @author Ines Montani <ines@ines.io>
 * @version 0.0.1
 * @license MIT
 */

/** Generate a terminal widget. */
export default class Termynal {
  /**
   * Construct the widget's settings.
   * @param {(string|Node)=} container - Query selector or container element.
   * @param {Object=} options - Custom settings.
   * @param {string} options.prefix - Prefix to use for data attributes.
   * @param {number} options.startDelay - Delay before animation, in ms.
   * @param {number} options.typeDelay - Delay between each typed character, in ms.
   * @param {number} options.lineDelay - Delay between each line, in ms.
   * @param {number} options.progressLength - Number of characters displayed as progress bar.
   * @param {string} options.progressChar – Character to use for progress bar, defaults to █.
   * @param {number} options.progressPercent - Max percent of progress.
   * @param {string} options.cursor – Character to use for cursor, defaults to ▋.
   */
  constructor(container = null, children = null, options = {}) {
    if (!container) return null;
    if (!Array.isArray(children)) return null;
    this.children = children;
    this.container = container;
    this.lines = children.map((element) => element.ref.current);
    this.pfx = `data-${options.prefix || "ty"}`;
    this.currentPlay = 0;
    this.startDelay =
      options.startDelay ||
      parseFloat(this.container.getAttribute(`${this.pfx}-startDelay`)) ||
      600;
    this.typeDelay =
      options.typeDelay ||
      parseFloat(this.container.getAttribute(`${this.pfx}-typeDelay`)) ||
      90;
    this.lineDelay =
      options.lineDelay ||
      parseFloat(this.container.getAttribute(`${this.pfx}-lineDelay`)) ||
      1500;
    this.progressLength =
      options.progressLength ||
      parseFloat(this.container.getAttribute(`${this.pfx}-progressLength`)) ||
      40;
    this.progressChar =
      options.progressChar ||
      this.container.getAttribute(`${this.pfx}-progressChar`) ||
      "█";
    this.progressPercent =
      options.progressPercent ||
      parseFloat(this.container.getAttribute(`${this.pfx}-progressPercent`)) ||
      100;
    this.cursor =
      options.cursor ||
      this.container.getAttribute(`${this.pfx}-cursor`) ||
      "▋";

    this.init();
  }

  /**
   * Initialise the widget, get lines, clear container and start animation.
   */
  init() {
    /**
     * Calculates width and height of Termynal container.
     * If container is empty and lines are dynamically loaded, defaults to browser `auto` or CSS.
     */
    const containerStyle = getComputedStyle(this.container);
    this.container.style.minHeight =
      containerStyle.height !== "0px" ? containerStyle.height : undefined;

    this.container.setAttribute("data-termynal", "");
    this.container.innerHTML = "";
  }

  restart() {
    for (let child of this.children) {
      child.ref.current.innerHTML = child.props.children;
    }

    this.currentPlay += 1;

    this.init();
    this.start(this.currentPlay);
  }

  /**
   * Start the animation and rener the lines depending on their data attributes.
   */
  async start(currentPlay) {
    await this._wait(this.startDelay);
    if (currentPlay !== this.currentPlay) return;

    if (this.lines.length <= 0) return;

    for (let line of this.lines) {
      if (typeof line.getAttribute !== "function") return;
      const type = line.getAttribute(this.pfx);
      const delay = line.getAttribute(`${this.pfx}-delay`) || this.lineDelay;

      if (type == "input") {
        line.setAttribute(`${this.pfx}-cursor`, this.cursor);
        await this.type(line, currentPlay);
        await this._wait(delay);
        if (currentPlay !== this.currentPlay) return;
      } else if (type == "progress") {
        await this.progress(line, currentPlay);
        await this._wait(delay);
        if (currentPlay !== this.currentPlay) return;
      } else {
        this.container.appendChild(line);
        await this._wait(delay);
        if (currentPlay !== this.currentPlay) return;
      }

      line.removeAttribute(`${this.pfx}-cursor`);
    }
  }

  /**
   * Animate a typed line.
   * @param {Node} line - The line element to render.
   */
  async type(line, currentPlay) {
    if (!line) return;
    if (typeof line.getAttribute !== "function") return;

    const chars = line.textContent.split("");
    const delay = line.getAttribute(`${this.pfx}-typeDelay`) || this.typeDelay;
    line.textContent = "";
    this.container.appendChild(line);

    for (let char of chars) {
      await this._wait(delay);
      if (currentPlay !== this.currentPlay) return;
      line.textContent += char;
    }
  }

  /**
   * Animate a progress bar.
   * @param {Node} line - The line element to render.
   */
  async progress(line, currentPlay) {
    if (!line) return;
    if (typeof line.getAttribute !== "function") return;

    const progressLength =
      line.getAttribute(`${this.pfx}-progressLength`) || this.progressLength;
    const progressChar =
      line.getAttribute(`${this.pfx}-progressChar`) || this.progressChar;
    const chars = progressChar.repeat(progressLength);
    const progressPercent =
      line.getAttribute(`${this.pfx}-progressPercent`) || this.progressPercent;
    line.textContent = "";
    this.container.appendChild(line);

    for (let i = 1; i < chars.length + 1; i++) {
      await this._wait(this.typeDelay);
      if (currentPlay !== this.currentPlay) return;
      const percent = Math.round((i / chars.length) * 100);
      line.textContent = `${chars.slice(0, i)} ${percent}%`;
      if (percent > progressPercent) {
        break;
      }
    }
  }

  /**
   * Helper function for animation delays, called with `await`.
   * @param {number} time - Timeout, in ms.
   */
  _wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
