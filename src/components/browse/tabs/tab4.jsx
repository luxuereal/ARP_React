const Tab4 = ({ data }) => {
  return (
    <div className="p-8 w-full grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-6 text-xl">
        <h3 className="font-bold">{"Installation Tools for this kit"}</h3>
        <h3 className="font-bold">{"Rod Bolt Stretch Gauge"}</h3>
        <h3
          className="pl-24"
          dangerouslySetInnerHTML={{ __html: data.rod_bolt_stretch_gauge }}
        ></h3>
        <h3 className="font-bold">{"ARP Ultra-Torque"}</h3>
        <h3
          className="pl-24"
          dangerouslySetInnerHTML={{ __html: data.arp_ultra_torque }}
        ></h3>
      </div>
      <div className="flex flex-col gap-6 text-xl">
        <h3 className="font-bold">{`Additional kits for Cadillac:  ${data.additional_kits_for_cadillac}`}</h3>
        <h3 className="font-bold">{"Primary Engine Fasteners"}</h3>
        <h3
          className="pl-24"
          dangerouslySetInnerHTML={{ __html: data.primary_engine_fasteners }}
        ></h3>
        <h3 className="font-bold">{"Tools"}</h3>
        <h3
          className="pl-24"
          dangerouslySetInnerHTML={{ __html: data.tools }}
        ></h3>
      </div>
    </div>
  );
};

export default Tab4;
