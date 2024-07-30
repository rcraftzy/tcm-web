import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useState } from "react";

import { calculateCenterLocation } from "../utils/calculateCenterLocation";
import type { Location } from "../types";
import { Map } from "./Map";

interface ApiLocation {
	id: string;
	coords: {
		lat: number;
		lng: number;
	};
	name: string;
}

export function Locations({ locations }: { locations: ApiLocation[] }) {

	const apiKey = import.meta.env.PUBLIC_GOOGLE_API_KEY ?? "";
	const [center, setCenter] = useState({
		lat: 0,
		lng: 0,
	});

  const [locationsState, setLocationsState] = useState<Location[]>([]);

	async function getAll() {
		const location = locations.map((location: ApiLocation) => ({
			latitude: location.coords.lat,
			longitude: location.coords.lng,
			name: location.name,
		}));

		return Promise.resolve(location);
	}

	useEffect(() => {
			getAll()
			.then((locations) => {
				const centerLocation = calculateCenterLocation(locations);
        setLocationsState(locations);
				setCenter({
					lat: centerLocation.latitude,
					lng: centerLocation.longitude,
				});
			})
			.catch(() => {
				throw new Error();
			});
	}, []);

	return (
		<section>
			{locations.length && (
				<Wrapper apiKey={apiKey}>
					<Map locations={locationsState} center={center} />
				</Wrapper>
			)}
		</section>
	);
}
