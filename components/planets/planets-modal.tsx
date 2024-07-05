'use client';

import { useStore } from '@/store';
import { Modal } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['modal'] = {
  header: {
    close: {
      base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white outline-transparent',
    },
  },
};

export default function PlanetsModal() {
  const { selectedPlanet, openModal, setOpenModal } = useStore();

  return (
    <Modal
      dismissible
      show={openModal && !!selectedPlanet}
      onClose={() => setOpenModal(false)}
      theme={customTheme}
    >
      <Modal.Header>{selectedPlanet?.name}</Modal.Header>
      <Modal.Body>
        <ul className="grid grid-cols-4 gap-8">
          <li>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Diameter
            </p>
            <h6 className="text-lg font-bold text-slate-500 dark:text-white break-words">
              {selectedPlanet?.diameter}
            </h6>
          </li>
          <li>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Rotation Period
            </p>
            <h6 className="text-lg font-bold text-slate-500 dark:text-white break-words">
              {selectedPlanet?.rotation_period}
            </h6>
          </li>
          <li>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Orbital Period
            </p>
            <h6 className="text-lg font-bold text-slate-500 dark:text-white break-words">
              {selectedPlanet?.orbital_period}
            </h6>
          </li>
          <li>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Gravity
            </p>
            <h6 className="text-lg capitalize font-bold text-slate-500 dark:text-white break-words">
              {selectedPlanet?.gravity}
            </h6>
          </li>
          <li>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Population
            </p>
            <h6 className="text-lg font-bold text-slate-500 dark:text-white break-words">
              {selectedPlanet?.population}
            </h6>
          </li>
          <li>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Climate
            </p>
            <h6 className="text-lg capitalize font-bold text-slate-500 dark:text-white break-words">
              {selectedPlanet?.climate}
            </h6>
          </li>
          <li>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Terrain
            </p>
            <h6 className="text-lg capitalize font-bold text-slate-500 dark:text-white break-words">
              {selectedPlanet?.terrain}
            </h6>
          </li>
          <li>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Surface Water
            </p>
            <h6 className="text-lg  font-bold text-slate-500 dark:text-white break-words">
              {selectedPlanet?.surface_water}
            </h6>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}
