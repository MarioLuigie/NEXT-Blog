'use client'
import { ReactSVG } from 'react-svg'

export default function SVGImage({ path }: { path: string }) {
	return <ReactSVG src={path} />
}