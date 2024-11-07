'use client';
import React from 'react';
import { Link, Button } from '@nextui-org/react';
import Image from 'next/image';
import CardItem from '@/app/local_team/card';
import { TeamList } from './team_list';

export default function Team() {
	return (
		<div className="top-12 bg-offWhite">
			<CardItem Teams={TeamList} />
		</div>
	);
}
