import React, { useContext } from "react"
import { ThemeContext } from "../theme/themeContext"

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const isDark = () => {
    return theme === "dark"
  }

  return (
    <div style={{ color: "#000", position: "absolute", zIndex: "99" }}>
      <div>
        <input
          id="toggle"
          type="checkbox"
          onChange={e => setTheme(e.target.checked ? "dark" : "light")}
          checked={isDark()}
        />
        <div className="toggle__dot">{theme === "dark" ? "🌒️" : "☀️"}</div>
      </div>
    </div>
  )
}

export default Toggle

// import React, { useContext } from "react"
// import { ThemeContext } from "../theme/themeContext"

// const Toggle = () => {
//   const { theme, setTheme } = useContext(ThemeContext)

//   const isDark = () => {
//     return theme === "dark"
//   }

//   return (
//     <div>
//       <div className="fixed right-8 md:right-8">
//         <div className="flex items-center">
//           <label
//             htmlFor="toogleA"
//             className="flex items-center cursor-pointer select-none"
//           >
//             <div className="relative">
//               <input
//                 id="toogleA"
//                 type="checkbox"
//                 className="hidden"
//                 onChange={e => setTheme(e.target.checked ? "dark" : "light")}
//                 checked={isDark()}
//               />

//               <div className="toggle__line w-10 h-6 bg-gray-400 rounded-full shadow-inner"></div>
//               <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0">
//                 {theme === "dark" ? "🌙" : "🌞"}
//               </div>
//             </div>
//             <div className="ml-3 text-gray-700 font-medium"></div>
//           </label>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Toggle
