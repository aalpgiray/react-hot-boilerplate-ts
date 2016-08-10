import React from "react"
import { createRenderer } from "react-addons-test-utils"
import { Link } from "react-router"
import { expect } from "chai"

import Navigator, { INavigator } from "./index"
import { ILink } from "../../routes"

export const shouldHaveHome = describe('Navigation Component', () => {
    it("Does it render as expected", () => {

        const shalowRenderer = createRenderer();

        const routes: ILink[] = [
            {
                path: "/",
                name: "Home"
            },
            {
                path: "/about",
                name: "About"
            }
        ]

        shalowRenderer.render(<Navigator routes={routes} />)

        const renderResult = shalowRenderer.getRenderOutput();

        expect(renderResult).to.eqls(
            <ul>
                <li key="/"><Link to="/">Home</Link></li>
                <li key="/about"><Link to="/about">About</Link></li>
            </ul>
        )
    })
})

