import React, { useState, useEffect, useMemo } from 'react';

// --- AUTHENTIC MNP HOLIDAYS PRIVATE TRAVEL CRM DATA ---
const DEFAULT_MNP_LEADS = [
  {
    id: 'MNP-101',
    name: 'Rajesh Shah & Family',
    phone: '9825012345',
    destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
    pax: 4,
    travelMonth: 'Dec 2026',
    departureDate: '2026-12-15',
    budget: 148000,
    status: 'new',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Pooja (Sales Executive)',
    source: 'Website Form (Live)',
    notes: 'Inquired for 4 adults. Requested 4★ hotel near Ben Thanh market with vegetarian meal options.',
    followUpDate: '2026-11-12',
    followUpTime: '11:00 AM',
    followUpNote: 'Call Rajeshbhai to confirm vegetarian meal preference & 4★ hotel in District 1.',
    followUpDone: false,
    priority: 'high'
  },
  {
    id: 'MNP-102',
    name: 'Vikram Patel & Friends',
    phone: '9712098765',
    destination: 'Kashmir Dal Lake & Gulmarg (Flyer #3)',
    pax: 6,
    travelMonth: 'Jan 2027',
    departureDate: '2027-01-10',
    budget: 120000,
    status: 'quote',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Brijesh Patel (Admin)',
    source: 'WhatsApp Desk',
    notes: 'Quotation sent for 6 pax with Gulmarg Gondola Phase 1 & 2 tickets included.',
    followUpDate: '2026-11-11',
    followUpTime: '03:30 PM',
    followUpNote: 'Share revised quote with Gondola Phase 2 tickets included and confirm group size.',
    followUpDone: false,
    priority: 'high'
  },
  {
    id: 'MNP-103',
    name: 'Hardik Mehta (Tech Solutions)',
    phone: '9898044321',
    destination: 'Udaipur Royal Heritage MICE Offsite',
    pax: 25,
    travelMonth: 'Nov 2026',
    departureDate: '2026-11-20',
    budget: 550000,
    status: 'confirmed',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Brijesh Patel (Admin)',
    source: 'Corporate Referral',
    notes: 'Confirmed 25 rooms with conference hall and DJ night setup. 50% advance token received.',
    followUpDate: '2026-11-14',
    followUpTime: '02:00 PM',
    followUpNote: 'Confirm banquet hall sound system & DJ vendor contract for Nov 21 offsite night.',
    followUpDone: false,
    priority: 'medium'
  },
  {
    id: 'MNP-104',
    name: 'Sanjay Joshi (Couple)',
    phone: '9920155678',
    destination: 'Bali 6D5N Luxury Pool Villa',
    pax: 2,
    travelMonth: 'Feb 2027',
    departureDate: '2027-02-14',
    budget: 185000,
    status: 'visa',
    branch: 'Mumbai (Lalbaug)',
    agent: 'Amit (Mumbai Branch)',
    source: 'Instagram Ad',
    notes: 'Honeymoon special. Visa on arrival assistance and private floating breakfast confirmed.',
    followUpDate: '2026-11-13',
    followUpTime: '05:00 PM',
    followUpNote: 'Receive passport scans for Bali e-VOA tourist visa processing.',
    followUpDone: false,
    priority: 'medium'
  },
  {
    id: 'MNP-105',
    name: 'Neha Trivedi',
    phone: '9723011223',
    destination: 'Kerala Houseboat & Munnar (Flyer #12)',
    pax: 5,
    travelMonth: 'Dec 2026',
    departureDate: '2026-12-24',
    budget: 165000,
    status: 'followup',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Pooja (Sales Executive)',
    source: 'Website Form (Live)',
    notes: 'Family trip. Requested private houseboat in Alleppey with Kerala Ayurvedic tour.',
    followUpDate: '2026-11-11',
    followUpTime: '04:15 PM',
    followUpNote: 'Follow up on Alleppey private premium houseboat cabin options & Ayurvedic spa.',
    followUpDone: false,
    priority: 'high'
  },
  {
    id: 'MNP-106',
    name: 'Bhavin Chauhan & Family',
    phone: '9879033445',
    destination: 'Dubai 5D4N Shopping Festival & Desert Safari',
    pax: 4,
    travelMonth: 'Jan 2027',
    departureDate: '2027-01-22',
    budget: 317000,
    status: 'confirmed',
    branch: 'Mumbai (Lalbaug)',
    agent: 'Amit (Mumbai Branch)',
    source: 'Direct Walk-in',
    notes: 'Visas issued! Burj Khalifa 124th floor tickets booked. Balance payment on arrival.',
    followUpDate: '2026-11-18',
    followUpTime: '12:30 PM',
    followUpNote: 'Deliver printed Dubai tourist visas and Burj Khalifa 124th floor entry vouchers.',
    followUpDone: false,
    priority: 'normal'
  },
  {
    id: 'MNP-107',
    name: 'Mahesh Soni (Senior Group)',
    phone: '9824055678',
    destination: 'Udaipur Royal Heritage Group Tour',
    pax: 8,
    travelMonth: 'Nov 2026',
    departureDate: '2026-11-28',
    budget: 79992,
    status: 'quote',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Pooja (Sales Executive)',
    source: 'Branch Walk-in',
    notes: 'Senior citizen group. Requested ground floor rooms and wheelchair assistance at City Palace.',
    followUpDate: '2026-11-12',
    followUpTime: '01:00 PM',
    followUpNote: 'Confirm ground-floor palace hotel room allocation and temple darshan timings.',
    followUpDone: false,
    priority: 'high'
  }
];

const DEFAULT_MNP_PIN = '1234';

// CRM Stages Order
const CRM_STAGES = [
  { id: 'new', label: 'New Inquiries', icon: '⚡', color: '#0284C7' },
  { id: 'quote', label: 'Quote Sent', icon: '📄', color: '#8B5CF6' },
  { id: 'followup', label: 'Follow-up Due', icon: '⏰', color: '#FF6B00' },
  { id: 'visa', label: 'Visa & Docs', icon: '🛂', color: '#0D9488' },
  { id: 'confirmed', label: 'Confirmed & Paid', icon: '🎉', color: '#10B981' },
  { id: 'completed', label: 'Tour Completed', icon: '🏆', color: '#F59E0B' }
];

export default function MnpCrmApp() {
  const [crmLoggedIn, setCrmLoggedIn] = useState(true);
  const [crmPinInput, setCrmPinInput] = useState('');
  const [crmPinError, setCrmPinError] = useState('');
  
  // Navigation: 'pipeline' | 'leads' | 'followups' | 'calendar' | 'analytics'
  const [activeTab, setActiveTab] = useState('pipeline');
  
  const [crmStageFilter, setCrmStageFilter] = useState('all');
  const [crmSearch, setCrmSearch] = useState('');
  const [followupFilter, setFollowupFilter] = useState('all');
  
  // Modals
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [showQuoteCalcModal, setShowQuoteCalcModal] = useState(false);
  const [selectedLeadModal, setSelectedLeadModal] = useState(null);
  const [scheduleFollowupLead, setScheduleFollowupLead] = useState(null);
  
  // Calendar State
  const [calCurrentDate, setCalCurrentDate] = useState(new Date(2026, 10, 11)); // Nov 11, 2026
  const [selectedCalDay, setSelectedCalDay] = useState(null);

  // Set document title
  useEffect(() => {
    document.title = 'MNP Holidays Private Travel CRM | Command Center';
  }, []);

  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    phone: '',
    destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
    pax: 2,
    travelMonth: 'Upcoming 2026/27',
    departureDate: '2026-12-20',
    budget: '85000',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Brijesh Patel (Admin)',
    notes: '',
    followUpDate: '2026-11-12',
    followUpNote: 'Initial travel requirement consultation & itinerary draft.'
  });

  const [quoteCalcState, setQuoteCalcState] = useState({
    destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
    adults: 2,
    children: 0,
    hotelTier: '4star',
    includeFlight: true,
    includeVisa: true
  });

  const [crmLeads, setCrmLeads] = useState(() => {
    try {
      const saved = localStorage.getItem('mnp_crm_leads_v3');
      if (saved) return JSON.parse(saved);
      // Fallback to v2 if exists
      const v2 = localStorage.getItem('mnp_crm_leads_v2');
      if (v2) {
        const parsed = JSON.parse(v2);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item, idx) => ({
            ...DEFAULT_MNP_LEADS[idx % DEFAULT_MNP_LEADS.length],
            ...item
          }));
        }
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_MNP_LEADS;
  });

  const saveLeads = (newLeads) => {
    setCrmLeads(newLeads);
    try {
      localStorage.setItem('mnp_crm_leads_v3', JSON.stringify(newLeads));
      localStorage.setItem('mnp_crm_leads_v2', JSON.stringify(newLeads));
    } catch (e) {
      console.error(e);
    }
  };

  const addNewLeadToCrm = (lead) => {
    const updated = [lead, ...crmLeads];
    saveLeads(updated);
  };

  const updateLeadStatus = (id, newStatus) => {
    const updated = crmLeads.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead));
    saveLeads(updated);
  };

  const moveLeadStage = (leadId, direction) => {
    const lead = crmLeads.find((l) => l.id === leadId);
    if (!lead) return;
    const currentIdx = CRM_STAGES.findIndex((s) => s.id === lead.status);
    if (currentIdx === -1) return;
    const nextIdx = currentIdx + direction;
    if (nextIdx >= 0 && nextIdx < CRM_STAGES.length) {
      updateLeadStatus(leadId, CRM_STAGES[nextIdx].id);
    }
  };

  const toggleFollowUpDone = (leadId) => {
    const updated = crmLeads.map((lead) =>
      lead.id === leadId ? { ...lead, followUpDone: !lead.followUpDone } : lead
    );
    saveLeads(updated);
  };

  const updateFollowUpSchedule = (leadId, date, time, note) => {
    const updated = crmLeads.map((lead) =>
      lead.id === leadId
        ? {
            ...lead,
            followUpDate: date,
            followUpTime: time || '11:00 AM',
            followUpNote: note || lead.followUpNote,
            followUpDone: false,
            status: lead.status === 'new' ? 'followup' : lead.status
          }
        : lead
    );
    saveLeads(updated);
    setScheduleFollowupLead(null);
  };

  const deleteLead = (id) => {
    if (window.confirm('Delete this travel lead from MNP CRM?')) {
      const updated = crmLeads.filter((lead) => lead.id !== id);
      saveLeads(updated);
      if (selectedLeadModal?.id === id) setSelectedLeadModal(null);
    }
  };

  const exportLeadsToCsv = () => {
    const headers = ['Lead_ID,Client_Name,Phone,Destination,Pax,Travel_Month,Departure_Date,Budget_INR,Stage_Status,Branch,Agent,Followup_Date,Followup_Note,Remarks'];
    const rows = crmLeads.map((l) =>
      `"${l.id}","${l.name}","${l.phone}","${l.destination}","${l.pax}","${l.travelMonth}","${l.departureDate || ''}","${l.budget}","${l.status}","${l.branch}","${l.agent}","${l.followUpDate || ''}","${(l.followUpNote || '').replace(/"/g, '""')}","${(l.notes || '').replace(/"/g, '""')}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `MNP_Holidays_CRM_Full_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateLeadSubmit = (e) => {
    e.preventDefault();
    if (!newLeadForm.name || !newLeadForm.phone) return;
    const newLeadObj = {
      id: `MNP-${Date.now().toString().slice(-4)}`,
      name: newLeadForm.name,
      phone: newLeadForm.phone,
      destination: newLeadForm.destination,
      pax: parseInt(newLeadForm.pax) || 2,
      travelMonth: newLeadForm.travelMonth || 'Dec 2026',
      departureDate: newLeadForm.departureDate || '2026-12-20',
      budget: parseInt(newLeadForm.budget) || 50000,
      status: 'new',
      branch: newLeadForm.branch,
      agent: newLeadForm.agent,
      source: 'Direct Intake (CRM)',
      notes: newLeadForm.notes || 'Inquiry logged manually by staff.',
      followUpDate: newLeadForm.followUpDate || '2026-11-12',
      followUpTime: '11:00 AM',
      followUpNote: newLeadForm.followUpNote || 'Follow up regarding quotation and itinerary approval.',
      followUpDone: false,
      priority: 'high'
    };
    addNewLeadToCrm(newLeadObj);
    setShowAddLeadModal(false);
    setNewLeadForm({
      name: '',
      phone: '',
      destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
      pax: 2,
      travelMonth: 'Upcoming 2026/27',
      departureDate: '2026-12-20',
      budget: '85000',
      branch: 'Ahmedabad (Nikol HQ)',
      agent: 'Brijesh Patel (Admin)',
      notes: '',
      followUpDate: '2026-11-12',
      followUpNote: 'Follow up on booking quotation.'
    });
  };

  // Search filtered leads
  const filteredLeads = useMemo(() => {
    return crmLeads.filter((lead) => {
      const matchesStage = crmStageFilter === 'all' || lead.status === crmStageFilter;
      if (!crmSearch.trim()) return matchesStage;
      const q = crmSearch.toLowerCase();
      const matchText = [
        lead.name,
        lead.phone,
        lead.destination,
        lead.branch,
        lead.agent,
        lead.notes,
        lead.followUpNote
      ].join(' ').toLowerCase();
      return matchesStage && matchText.includes(q);
    });
  }, [crmLeads, crmStageFilter, crmSearch]);

  // Pending Follow-ups Count
  const pendingFollowups = useMemo(() => {
    return crmLeads.filter((l) => !l.followUpDone && l.followUpDate);
  }, [crmLeads]);

  const todayStr = '2026-11-11'; // Current reference time

  const todayFollowups = useMemo(() => {
    return pendingFollowups.filter((l) => l.followUpDate <= todayStr);
  }, [pendingFollowups]);

  // Overall KPI metrics
  const totalLeadsCount = crmLeads.length;
  const totalPipelineValue = crmLeads.reduce((acc, curr) => acc + (Number(curr.budget) || 0), 0);
  const confirmedCount = crmLeads.filter((l) => l.status === 'confirmed').length;
  const quoteSentCount = crmLeads.filter((l) => l.status === 'quote').length;

  return (
    <div className="mnp-crm-standalone-app">
      <div className="mnp-crm-portal">
        {/* Top Navigation Bar */}
        <div className="mnp-crm-topbar">
          <div className="mnp-crm-brand-group">
            <img src="/logo.png" alt="MNP Holidays" className="mnp-crm-logo-img" />
            <div className="mnp-crm-titles">
              <h2>
                <span>MNP Holidays</span>
                <span style={{ color: '#FF6B00', fontSize: '0.85em' }}>CRM</span>
              </h2>
              <div className="mnp-crm-tagline">
                <span>Private Travel Command Center</span>
                <span className="mnp-crm-branch-pill">Ahmedabad HQ & Mumbai Branch</span>
              </div>
            </div>
          </div>

          {crmLoggedIn && (
            <div className="mnp-crm-search-box">
              <span className="mnp-crm-search-icon">🔍</span>
              <input 
                type="text" 
                className="mnp-crm-search-input"
                placeholder="Search deals, clients, phones, tasks, destinations..."
                value={crmSearch}
                onChange={(e) => setCrmSearch(e.target.value)}
              />
            </div>
          )}

          <div className="mnp-crm-actions-group">
            {crmLoggedIn ? (
              <>
                <button 
                  className="btn-crm-action primary"
                  onClick={() => setShowAddLeadModal(true)}
                  title="Add New Travel Lead"
                >
                  <span>➕</span>
                  <span>Add Lead</span>
                </button>
                <button 
                  className="btn-crm-action"
                  onClick={() => setShowQuoteCalcModal(true)}
                  title="Quick Price Estimator"
                >
                  <span>⚡</span>
                  <span>Quote Calc</span>
                </button>
                <button 
                  className="btn-crm-action"
                  onClick={exportLeadsToCsv}
                  title="Export all leads to Excel / CSV"
                >
                  <span>📥</span>
                  <span>Export CSV</span>
                </button>
                <button 
                  className="btn-crm-action"
                  onClick={() => setCrmLoggedIn(false)}
                  title="Lock CRM Screen"
                >
                  <span>🔒</span>
                  <span>Lock</span>
                </button>
              </>
            ) : (
              <button 
                className="btn-crm-action primary"
                onClick={() => setCrmLoggedIn(true)}
              >
                <span>⚡</span>
                <span>Admin Unlock</span>
              </button>
            )}

            {/* Link to Public Customer Website */}
            <a 
              href="https://www.mnpholidays.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-crm-action"
              style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)' }}
              title="Open Public Customer Website"
            >
              <span>🌐</span>
              <span>Public Website</span>
            </a>
          </div>
        </div>

        {/* Enterprise Sub-Navigation Bar */}
        {crmLoggedIn && (
          <div className="mnp-crm-subnav">
            <button 
              className={`crm-subnav-btn ${activeTab === 'pipeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('pipeline')}
            >
              <span>📌</span>
              <span>Sales Pipeline</span>
            </button>
            <button 
              className={`crm-subnav-btn ${activeTab === 'followups' ? 'active' : ''}`}
              onClick={() => setActiveTab('followups')}
            >
              <span>⏰</span>
              <span>Follow-ups & Reminders</span>
              {todayFollowups.length > 0 && (
                <span className="crm-badge-count">{todayFollowups.length} Due</span>
              )}
            </button>
            <button 
              className={`crm-subnav-btn ${activeTab === 'calendar' ? 'active' : ''}`}
              onClick={() => setActiveTab('calendar')}
            >
              <span>📅</span>
              <span>Tour Calendar</span>
            </button>
            <button 
              className={`crm-subnav-btn ${activeTab === 'leads' ? 'active' : ''}`}
              onClick={() => setActiveTab('leads')}
            >
              <span>📋</span>
              <span>All Leads & Inquiries</span>
              <span className="kanban-col-count" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                {crmLeads.length}
              </span>
            </button>
            <button 
              className={`crm-subnav-btn ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <span>📊</span>
              <span>Branch Analytics</span>
            </button>

            <div className="crm-subnav-right-actions">
              <span style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                Active Session: <strong>Brijesh Patel (HQ Admin)</strong>
              </span>
            </div>
          </div>
        )}

        {/* Portal Body */}
        {!crmLoggedIn ? (
          /* Security PIN Lock Shield */
          <div className="mnp-crm-login-shield">
            <div className="mnp-crm-login-card">
              <img src="/logo.png" alt="MNP Holidays" className="mnp-crm-login-logo" />
              <div>
                <h3 className="mnp-crm-login-title">Staff & Admin Access Required</h3>
                <p className="mnp-crm-login-sub">Enter your 4-digit travel executive PIN to access MNP customer leads & bookings.</p>
              </div>

              <form 
                className="mnp-crm-pin-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (crmPinInput === DEFAULT_MNP_PIN || crmPinInput === '9712' || crmPinInput === '9898') {
                    setCrmLoggedIn(true);
                    setCrmPinError('');
                    setCrmPinInput('');
                  } else {
                    setCrmPinError('Invalid PIN code. Default staff PIN is 1234.');
                  }
                }}
              >
                <input 
                  type="password"
                  maxLength={4}
                  className="mnp-crm-pin-input"
                  placeholder="• • • •"
                  value={crmPinInput}
                  onChange={(e) => setCrmPinInput(e.target.value)}
                  autoFocus
                />
                {crmPinError && <span className="mnp-crm-pin-error">{crmPinError}</span>}
                <button type="submit" className="mnp-crm-btn-unlock">Unlock CRM Dashboard</button>
              </form>

              <div className="mnp-crm-login-footer">
                <span>Default Demo PIN: <strong>1234</strong></span>
                <span>•</span>
                <button 
                  type="button" 
                  className="mnp-crm-quick-unlock-link"
                  onClick={() => setCrmLoggedIn(true)}
                >
                  Quick Bypass (Staff)
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Active Command Center Dashboard */
          <div className="mnp-crm-body">
            
            {/* Top KPI Metric Cards (Visible on All Tabs for Executive Overview) */}
            <div className="mnp-crm-kpi-grid">
              <div className="mnp-crm-kpi-card blue">
                <div className="mnp-crm-kpi-icon">📋</div>
                <div className="mnp-crm-kpi-details">
                  <span className="mnp-crm-kpi-label">Total Inquiries</span>
                  <span className="mnp-crm-kpi-value">{totalLeadsCount}</span>
                  <span className="mnp-crm-kpi-subtext">Active Pipeline</span>
                </div>
              </div>

              <div className="mnp-crm-kpi-card orange">
                <div className="mnp-crm-kpi-icon">💼</div>
                <div className="mnp-crm-kpi-details">
                  <span className="mnp-crm-kpi-label">Pipeline Value</span>
                  <span className="mnp-crm-kpi-value">₹{(totalPipelineValue / 100000).toFixed(2)}L</span>
                  <span className="mnp-crm-kpi-subtext" style={{ color: '#FF6B00' }}>₹{totalPipelineValue.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mnp-crm-kpi-card green">
                <div className="mnp-crm-kpi-icon">🎉</div>
                <div className="mnp-crm-kpi-details">
                  <span className="mnp-crm-kpi-label">Confirmed Tours</span>
                  <span className="mnp-crm-kpi-value">{confirmedCount}</span>
                  <span className="mnp-crm-kpi-subtext">Booked & Advance Paid</span>
                </div>
              </div>

              <div className="mnp-crm-kpi-card purple">
                <div className="mnp-crm-kpi-icon">⏰</div>
                <div className="mnp-crm-kpi-details">
                  <span className="mnp-crm-kpi-label">Pending Follow-ups</span>
                  <span className="mnp-crm-kpi-value">{pendingFollowups.length}</span>
                  <span className="mnp-crm-kpi-subtext" style={{ color: '#8B5CF6' }}>
                    {todayFollowups.length} Due Today
                  </span>
                </div>
              </div>
            </div>

            {/* TAB 1: 📌 VISUAL SALES PIPELINE (KANBAN BOARD) */}
            {activeTab === 'pipeline' && (
              <div className="mnp-crm-pipeline-container">
                <div className="mnp-crm-pipeline-header">
                  <div className="pipeline-title-group">
                    <h3>
                      <span>📌</span>
                      <span>Visual Sales Pipeline</span>
                    </h3>
                    <p>Track tour inquiries from initial contact to booking confirmation and departure.</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      className="btn-crm-action primary"
                      onClick={() => setShowAddLeadModal(true)}
                    >
                      <span>➕</span>
                      <span>Add Deal / Lead</span>
                    </button>
                    <button 
                      className="btn-crm-action"
                      onClick={() => setActiveTab('followups')}
                    >
                      <span>⏰</span>
                      <span>Today's Follow-ups ({todayFollowups.length})</span>
                    </button>
                  </div>
                </div>

                <div className="mnp-crm-kanban-board">
                  {CRM_STAGES.map((stage) => {
                    const stageLeads = filteredLeads.filter((l) => l.status === stage.id);
                    const stageSum = stageLeads.reduce((acc, curr) => acc + (Number(curr.budget) || 0), 0);

                    return (
                      <div key={stage.id} className="mnp-crm-kanban-col">
                        <div className={`kanban-col-header ${stage.id}`}>
                          <div className="kanban-header-top">
                            <span className="kanban-col-title">
                              <span>{stage.icon}</span>
                              <span>{stage.label}</span>
                            </span>
                            <span className="kanban-col-count">{stageLeads.length}</span>
                          </div>
                          <span className="kanban-col-value">
                            ₹{(stageSum / 100000).toFixed(2)}L ({stageSum.toLocaleString('en-IN')})
                          </span>
                        </div>

                        <div className="kanban-cards-list">
                          {stageLeads.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0.5rem', color: '#94A3B8', fontSize: '0.78rem' }}>
                              <span>No deals in this stage</span>
                            </div>
                          ) : (
                            stageLeads.map((lead) => {
                              const waText = `Hello ${lead.name}! This is ${lead.agent} from MNP Holidays Pvt. Ltd.\n\nFollowing up regarding your *${lead.destination}* travel plan (${lead.pax} Pax, ${lead.travelMonth}):\n\n💰 Estimated Quotation: ₹${Number(lead.budget).toLocaleString('en-IN')}\n🏨 4★/5★ Verified Hotels\n✈️ Flights & Tourist Visas Included\n\nMay we connect today for the final day-wise itinerary approval?`;

                              return (
                                <div 
                                  key={lead.id} 
                                  className="kanban-card"
                                  onClick={() => setSelectedLeadModal(lead)}
                                >
                                  <div className="kanban-card-top">
                                    <div>
                                      <h4 className="kanban-client-name">{lead.name}</h4>
                                      <span className="kanban-lead-id">{lead.id} • {lead.source}</span>
                                    </div>
                                    <span 
                                      className="mnp-crm-status-pill"
                                      style={{ background: 'rgba(2,132,199,0.1)', color: '#0284C7', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800 }}
                                    >
                                      {lead.branch.includes('Mumbai') ? 'Mumbai' : 'Ahmedabad'}
                                    </span>
                                  </div>

                                  <div className="kanban-dest-badge">
                                    <span>📍</span>
                                    <span>{lead.destination}</span>
                                  </div>

                                  <div className="kanban-metrics-row">
                                    <span>👥 {lead.pax} Pax ({lead.travelMonth})</span>
                                    <span className="kanban-budget">₹{Number(lead.budget).toLocaleString('en-IN')}</span>
                                  </div>

                                  {lead.followUpDate && (
                                    <div className={`kanban-followup-pill ${lead.followUpDate <= todayStr ? 'urgent' : ''}`}>
                                      <span>⏰</span>
                                      <span>
                                        {lead.followUpDate === todayStr ? 'Today' : `Follow-up: ${lead.followUpDate.slice(5)}`}
                                      </span>
                                      <span style={{ marginLeft: 'auto', fontSize: '0.65rem' }}>{lead.followUpTime || '11 AM'}</span>
                                    </div>
                                  )}

                                  <div className="kanban-card-actions" onClick={(e) => e.stopPropagation()}>
                                    <a 
                                      href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(waText)}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="btn-kanban-action wa"
                                      title="WhatsApp Follow-up"
                                    >
                                      <span>💬</span>
                                      <span>WhatsApp</span>
                                    </a>
                                    <a 
                                      href={`tel:+91${lead.phone.replace(/\D/g, '')}`}
                                      className="btn-kanban-action"
                                      title="Call Client"
                                    >
                                      <span>📞</span>
                                      <span>Call</span>
                                    </a>
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                      <button 
                                        className="btn-kanban-stage-move"
                                        title="Move to Previous Stage"
                                        onClick={() => moveLeadStage(lead.id, -1)}
                                      >
                                        ◀
                                      </button>
                                      <button 
                                        className="btn-kanban-stage-move"
                                        title="Advance to Next Stage"
                                        onClick={() => moveLeadStage(lead.id, 1)}
                                      >
                                        ▶
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 2: ⏰ DEDICATED FOLLOW-UPS & REMINDERS HUB */}
            {activeTab === 'followups' && (
              <div className="mnp-crm-followups-container">
                {/* Follow-up Overview KPIs */}
                <div className="followup-metric-grid">
                  <div className="followup-metric-card urgent">
                    <div className="followup-metric-icon">🔥</div>
                    <div className="followup-metric-info">
                      <span className="followup-metric-num">{todayFollowups.length}</span>
                      <span className="followup-metric-label">Due Today / Overdue</span>
                    </div>
                  </div>

                  <div className="followup-metric-card today">
                    <div className="followup-metric-icon">⏰</div>
                    <div className="followup-metric-info">
                      <span className="followup-metric-num">
                        {pendingFollowups.filter((l) => l.followUpDate === '2026-11-12').length}
                      </span>
                      <span className="followup-metric-label">Due Tomorrow</span>
                    </div>
                  </div>

                  <div className="followup-metric-card upcoming">
                    <div className="followup-metric-icon">📅</div>
                    <div className="followup-metric-info">
                      <span className="followup-metric-num">
                        {pendingFollowups.filter((l) => l.followUpDate > '2026-11-12').length}
                      </span>
                      <span className="followup-metric-label">Next 7 Days</span>
                    </div>
                  </div>

                  <div className="followup-metric-card completed">
                    <div className="followup-metric-icon">✅</div>
                    <div className="followup-metric-info">
                      <span className="followup-metric-num">
                        {crmLeads.filter((l) => l.followUpDone).length}
                      </span>
                      <span className="followup-metric-label">Completed Tasks</span>
                    </div>
                  </div>
                </div>

                {/* Filter Bar & Schedule Action */}
                <div className="followups-filter-bar">
                  <div className="followup-chips-group">
                    <button 
                      className={`followup-chip ${followupFilter === 'all' ? 'active' : ''}`}
                      onClick={() => setFollowupFilter('all')}
                    >
                      <span>All Tasks</span>
                      <span className="kanban-col-count">{pendingFollowups.length}</span>
                    </button>
                    <button 
                      className={`followup-chip ${followupFilter === 'today' ? 'active' : ''}`}
                      onClick={() => setFollowupFilter('today')}
                    >
                      <span>🔥 Due Today</span>
                      <span className="crm-badge-count">{todayFollowups.length}</span>
                    </button>
                    <button 
                      className={`followup-chip ${followupFilter === 'upcoming' ? 'active' : ''}`}
                      onClick={() => setFollowupFilter('upcoming')}
                    >
                      <span>📅 Next 7 Days</span>
                    </button>
                    <button 
                      className={`followup-chip ${followupFilter === 'completed' ? 'active' : ''}`}
                      onClick={() => setFollowupFilter('completed')}
                    >
                      <span>✅ Completed</span>
                    </button>
                  </div>

                  <button 
                    className="btn-crm-action primary"
                    onClick={() => setScheduleFollowupLead(crmLeads[0])}
                  >
                    <span>➕</span>
                    <span>Schedule New Follow-up</span>
                  </button>
                </div>

                {/* Follow-up Tasks List */}
                <div className="followups-list">
                  {(() => {
                    const tasks = crmLeads.filter((lead) => {
                      if (!lead.followUpDate && !lead.followUpNote) return false;
                      if (followupFilter === 'completed') return lead.followUpDone;
                      if (lead.followUpDone) return false;
                      if (followupFilter === 'today') return lead.followUpDate <= todayStr;
                      if (followupFilter === 'upcoming') return lead.followUpDate > todayStr;
                      return true;
                    });

                    if (tasks.length === 0) {
                      return (
                        <div style={{ textAlign: 'center', padding: '3.5rem 1rem', background: '#FFFFFF', borderRadius: '14px', border: '1px dashed #CBD5E1' }}>
                          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎉</div>
                          <h4 style={{ color: '#0F2557', margin: 0, fontWeight: 800 }}>No Follow-ups Pending!</h4>
                          <p style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '4px' }}>All client follow-ups for this filter are completed.</p>
                        </div>
                      );
                    }

                    return tasks.map((lead) => {
                      const isOverdue = lead.followUpDate < todayStr;
                      const isToday = lead.followUpDate === todayStr;
                      const tagClass = lead.followUpDone ? 'completed' : isOverdue ? 'urgent' : isToday ? 'today' : 'upcoming';
                      const tagText = lead.followUpDone ? 'Completed' : isOverdue ? 'Overdue' : isToday ? 'Today' : `Due: ${lead.followUpDate}`;

                      const waFollowUpMsg = `Hello ${lead.name}! This is ${lead.agent} from MNP Holidays Pvt. Ltd.\n\nRegarding your *${lead.destination}* travel plan:\n\n💬 Note: ${lead.followUpNote || 'Checking in on your vacation itinerary status.'}\n\nPlease let us know a convenient time to speak today!`;

                      return (
                        <div key={lead.id} className={`followup-task-card ${lead.followUpDone ? 'is-completed' : ''}`}>
                          <div className="followup-task-left">
                            <button 
                              className={`followup-check-btn ${lead.followUpDone ? 'checked' : ''}`}
                              onClick={() => toggleFollowUpDone(lead.id)}
                              title={lead.followUpDone ? 'Mark as Pending' : 'Mark as Done'}
                            >
                              {lead.followUpDone && '✓'}
                            </button>

                            <div className="followup-task-details">
                              <div className="followup-client-row">
                                <span className="followup-client-name">{lead.name}</span>
                                <span className={`followup-due-tag ${tagClass}`}>{tagText} • {lead.followUpTime || '11:00 AM'}</span>
                                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                                  Assigned: <strong>{lead.agent}</strong> ({lead.branch})
                                </span>
                              </div>

                              <div className="followup-dest-info">
                                <span>📍 {lead.destination}</span> • <span>👥 {lead.pax} Pax</span> • <span>💰 ₹{Number(lead.budget).toLocaleString('en-IN')}</span>
                              </div>

                              {lead.followUpNote && (
                                <div className="followup-note-text">
                                  <strong>Task:</strong> {lead.followUpNote}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="followup-task-right">
                            <a 
                              href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(waFollowUpMsg)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="btn-crm-action"
                              style={{ background: '#25D366', color: '#FFFFFF', border: 'none' }}
                              title="Send WhatsApp Follow-up Message"
                            >
                              <span>💬</span>
                              <span>WhatsApp</span>
                            </a>
                            <a 
                              href={`tel:+91${lead.phone.replace(/\D/g, '')}`}
                              className="btn-crm-action"
                              title="Call Client"
                            >
                              <span>📞</span>
                              <span>Call</span>
                            </a>
                            <button 
                              className="btn-crm-action"
                              onClick={() => setScheduleFollowupLead(lead)}
                              title="Reschedule Follow-up"
                            >
                              <span>🗓️</span>
                              <span>Reschedule</span>
                            </button>
                            <button 
                              className="btn-crm-action"
                              onClick={() => setSelectedLeadModal(lead)}
                              title="View Full Lead Details"
                            >
                              <span>👁️</span>
                              <span>Details</span>
                            </button>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>
            )}

            {/* TAB 3: 📅 INTERACTIVE TOUR DEPARTURE & CLIENT CALENDAR */}
            {activeTab === 'calendar' && (
              <div className="mnp-crm-calendar-container">
                {/* Calendar Navigation Header */}
                <div className="mnp-crm-calendar-header">
                  <div className="cal-nav-group">
                    <button 
                      className="cal-nav-btn"
                      onClick={() => setCalCurrentDate(new Date(calCurrentDate.getFullYear(), calCurrentDate.getMonth() - 1, 1))}
                    >
                      ◀ Prev
                    </button>
                    <span className="cal-month-title">
                      {calCurrentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </span>
                    <button 
                      className="cal-nav-btn"
                      onClick={() => setCalCurrentDate(new Date(calCurrentDate.getFullYear(), calCurrentDate.getMonth() + 1, 1))}
                    >
                      Next ▶
                    </button>
                    <button 
                      className="cal-nav-btn"
                      onClick={() => setCalCurrentDate(new Date(2026, 10, 11))}
                      style={{ background: '#FF6B00', color: '#fff', borderColor: '#FF6B00' }}
                    >
                      Current (Nov 2026)
                    </button>
                  </div>

                  <div className="cal-legend-group">
                    <span><span className="cal-legend-dot departure"></span> 🛫 Tour Departure</span>
                    <span><span className="cal-legend-dot followup"></span> ⏰ Client Follow-up</span>
                    <span><span className="cal-legend-dot payment"></span> 🎉 Confirmed / Advance</span>
                  </div>

                  <button 
                    className="btn-crm-action primary"
                    onClick={() => setShowAddLeadModal(true)}
                  >
                    <span>➕</span>
                    <span>Add Departure / Lead</span>
                  </button>
                </div>

                {/* Calendar Grid Card */}
                <div className="mnp-crm-calendar-grid-card">
                  <div className="mnp-crm-cal-weekdays">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  {(() => {
                    const year = calCurrentDate.getFullYear();
                    const month = calCurrentDate.getMonth();
                    
                    // Days in month
                    const firstDayIdx = (new Date(year, month, 1).getDay() + 6) % 7; // Monday = 0
                    const totalDays = new Date(year, month + 1, 0).getDate();
                    
                    const calendarCells = [];
                    // Leading empty/prev days
                    for (let i = 0; i < firstDayIdx; i++) {
                      calendarCells.push({ dayNumber: '', isCurrentMonth: false, dateStr: '' });
                    }
                    // Current month days
                    for (let d = 1; d <= totalDays; d++) {
                      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                      calendarCells.push({ dayNumber: d, isCurrentMonth: true, dateStr });
                    }

                    return (
                      <div className="mnp-crm-cal-days">
                        {calendarCells.map((cell, idx) => {
                          if (!cell.isCurrentMonth) {
                            return <div key={`empty-${idx}`} className="cal-day-cell other-month"></div>;
                          }

                          const isToday = cell.dateStr === todayStr;
                          
                          // Find events for this date
                          const departures = crmLeads.filter((l) => l.departureDate === cell.dateStr);
                          const followups = crmLeads.filter((l) => l.followUpDate === cell.dateStr && !l.followUpDone);
                          const confirmedOnDate = crmLeads.filter((l) => l.status === 'confirmed' && l.departureDate === cell.dateStr);

                          return (
                            <div 
                              key={cell.dateStr} 
                              className={`cal-day-cell ${isToday ? 'today' : ''}`}
                              onClick={() => setSelectedCalDay({ dateStr: cell.dateStr, departures, followups })}
                            >
                              <div className="cal-day-top">
                                <span className="cal-day-number">{cell.dayNumber}</span>
                                {isToday && (
                                  <span style={{ fontSize: '0.62rem', color: '#FF6B00', fontWeight: 800 }}>TODAY</span>
                                )}
                              </div>

                              <div className="cal-events-list">
                                {departures.map((l) => (
                                  <div 
                                    key={`dep-${l.id}`} 
                                    className="cal-event-pill departure"
                                    title={`Departure: ${l.name} - ${l.destination}`}
                                    onClick={(e) => { e.stopPropagation(); setSelectedLeadModal(l); }}
                                  >
                                    <span>🛫</span>
                                    <span>{l.name.split(' ')[0]} ({l.destination.split(' ')[0]})</span>
                                  </div>
                                ))}

                                {followups.map((l) => (
                                  <div 
                                    key={`fol-${l.id}`} 
                                    className="cal-event-pill followup"
                                    title={`Follow-up: ${l.name} - ${l.followUpNote}`}
                                    onClick={(e) => { e.stopPropagation(); setSelectedLeadModal(l); }}
                                  >
                                    <span>⏰</span>
                                    <span>{l.name.split(' ')[0]}</span>
                                  </div>
                                ))}

                                {confirmedOnDate.length > 0 && departures.length === 0 && (
                                  <div className="cal-event-pill payment">
                                    <span>🎉</span>
                                    <span>Confirmed Tour</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                </div>

                {/* Day Details Drawer/Popup if selected */}
                {selectedCalDay && (
                  <div className="mnp-crm-submodal-overlay" onClick={() => setSelectedCalDay(null)}>
                    <div className="mnp-crm-submodal" onClick={(e) => e.stopPropagation()}>
                      <div className="mnp-crm-submodal-header">
                        <h3>📅 Agenda for {selectedCalDay.dateStr}</h3>
                        <button className="btn-crm-close" onClick={() => setSelectedCalDay(null)}>✕</button>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', padding: '0.5rem 0' }}>
                        <div>
                          <h4 style={{ color: '#0284C7', margin: '0 0 0.4rem 0', fontSize: '0.9rem' }}>
                            🛫 Tour Departures ({selectedCalDay.departures.length})
                          </h4>
                          {selectedCalDay.departures.length === 0 ? (
                            <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>No tour departures scheduled on this date.</p>
                          ) : (
                            selectedCalDay.departures.map((l) => (
                              <div key={l.id} style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', padding: '0.6rem 0.8rem', borderRadius: '8px', marginBottom: '0.4rem' }}>
                                <strong>{l.name}</strong> • {l.destination} ({l.pax} Pax) • ₹{Number(l.budget).toLocaleString('en-IN')}
                              </div>
                            ))
                          )}
                        </div>

                        <div>
                          <h4 style={{ color: '#FF6B00', margin: '0.5rem 0 0.4rem 0', fontSize: '0.9rem' }}>
                            ⏰ Client Follow-ups ({selectedCalDay.followups.length})
                          </h4>
                          {selectedCalDay.followups.length === 0 ? (
                            <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>No follow-up calls scheduled on this date.</p>
                          ) : (
                            selectedCalDay.followups.map((l) => (
                              <div key={l.id} style={{ background: '#FFF7ED', border: '1px solid #FFEDD5', padding: '0.6rem 0.8rem', borderRadius: '8px', marginBottom: '0.4rem' }}>
                                <strong>{l.name}</strong> ({l.phone}) • {l.followUpTime || '11:00 AM'}
                                <p style={{ fontSize: '0.78rem', color: '#475569', margin: '2px 0 0 0' }}>{l.followUpNote}</p>
                              </div>
                            ))
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                        <button className="btn-crm-action primary" onClick={() => setSelectedCalDay(null)}>
                          Close Agenda
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: 📋 ALL LEADS & CONTACTS (GRID / TABLE VIEW) */}
            {activeTab === 'leads' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {/* Pipeline Stage Filter Chips */}
                <div className="mnp-crm-filter-bar">
                  <button 
                    className={`mnp-crm-stage-chip ${crmStageFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setCrmStageFilter('all')}
                  >
                    <span>All Leads</span>
                    <span className="mnp-crm-chip-count">{crmLeads.length}</span>
                  </button>
                  {CRM_STAGES.map((s) => (
                    <button 
                      key={s.id}
                      className={`mnp-crm-stage-chip ${crmStageFilter === s.id ? 'active' : ''}`}
                      onClick={() => setCrmStageFilter(s.id)}
                    >
                      <span>{s.icon} {s.label}</span>
                      <span className="mnp-crm-chip-count">{crmLeads.filter((l) => l.status === s.id).length}</span>
                    </button>
                  ))}
                </div>

                {/* Leads Grid & Cards */}
                {filteredLeads.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3.5rem 1rem', background: '#FFFFFF', borderRadius: '12px', border: '1px dashed #CBD5E1' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏝️</div>
                    <h4 style={{ color: '#0F2557', margin: 0, fontWeight: 800 }}>No Leads Found</h4>
                    <p style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '4px' }}>Try switching stage filters or search keywords.</p>
                    <button 
                      className="btn-crm-action primary"
                      onClick={() => { setCrmStageFilter('all'); setCrmSearch(''); }}
                      style={{ marginTop: '0.5rem' }}
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div className="mnp-crm-leads-grid">
                    {filteredLeads.map((lead) => {
                      const waQuoteText = `Hello ${lead.name}! This is ${lead.agent} from MNP Holidays Pvt. Ltd.\n\nFollowing your inquiry for *${lead.destination}* (${lead.pax} travelers, ${lead.travelMonth}):\n\n✨ Estimated Package: ₹${Number(lead.budget).toLocaleString('en-IN')}\n🏨 4★/5★ Verified Luxury Hotels\n✈️ Flight & Tourist Visa Assistance\n🚗 Private Cab Sightseeing & Concierge\n\nMay we send the complete day-wise PDF itinerary to this number?`;

                      return (
                        <div key={lead.id} className="mnp-crm-lead-card">
                          <div className="mnp-crm-lead-header">
                            <div>
                              <h4 className="mnp-crm-cust-name" onClick={() => setSelectedLeadModal(lead)} style={{ cursor: 'pointer' }}>
                                <span>👤</span>
                                <span>{lead.name}</span>
                              </h4>
                              <span className="mnp-crm-lead-time">
                                ID: {lead.id} • Source: {lead.source}
                              </span>
                            </div>
                            <select 
                              className={`mnp-crm-status-select ${lead.status}`}
                              value={lead.status}
                              onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                            >
                              {CRM_STAGES.map((s) => (
                                <option key={s.id} value={s.id}>{s.icon} {s.label}</option>
                              ))}
                            </select>
                          </div>

                          <div className="mnp-crm-lead-info-box">
                            <div className="mnp-crm-info-row">
                              <span className="mnp-crm-info-label">📍 Destination</span>
                              <span className="mnp-crm-info-val" style={{ color: '#0284C7' }}>{lead.destination}</span>
                            </div>
                            <div className="mnp-crm-info-row">
                              <span className="mnp-crm-info-label">👨‍👩‍👧‍👦 Travelers</span>
                              <span className="mnp-crm-info-val">{lead.pax} Pax ({lead.travelMonth})</span>
                            </div>
                            <div className="mnp-crm-info-row">
                              <span className="mnp-crm-info-label">💰 Quotation</span>
                              <span className="mnp-crm-lead-quote">₹{Number(lead.budget).toLocaleString('en-IN')}</span>
                            </div>
                            <div className="mnp-crm-info-row">
                              <span className="mnp-crm-info-label">🏢 Branch & Agent</span>
                              <span className="mnp-crm-info-val" style={{ fontSize: '0.72rem', color: '#64748B' }}>{lead.agent} ({lead.branch})</span>
                            </div>
                            {lead.followUpDate && (
                              <div className="mnp-crm-info-row">
                                <span className="mnp-crm-info-label">⏰ Follow-up</span>
                                <span className="mnp-crm-info-val" style={{ color: lead.followUpDate <= todayStr ? '#DC2626' : '#FF6B00', fontWeight: 800 }}>
                                  {lead.followUpDate} ({lead.followUpTime || '11 AM'})
                                </span>
                              </div>
                            )}
                          </div>

                          {lead.notes && (
                            <div className="mnp-crm-notes-box">
                              <strong>Remarks:</strong> {lead.notes}
                            </div>
                          )}

                          <div className="mnp-crm-card-actions">
                            <a 
                              href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(waQuoteText)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="btn-crm-card-wa"
                              title="Send official itinerary & quote on WhatsApp"
                            >
                              <span>💬</span>
                              <span>WhatsApp</span>
                            </a>
                            <a 
                              href={`tel:+91${lead.phone.replace(/\D/g, '')}`}
                              className="btn-crm-card-call"
                              title="Call customer directly"
                            >
                              <span>📞</span>
                              <span>Call</span>
                            </a>
                            <button 
                              className="btn-crm-action"
                              style={{ padding: '0.45rem', fontSize: '0.8rem' }}
                              onClick={() => setScheduleFollowupLead(lead)}
                              title="Schedule / Reschedule Follow-up"
                            >
                              ⏰
                            </button>
                            <button 
                              className="btn-crm-card-del"
                              onClick={() => deleteLead(lead.id)}
                              title="Delete Lead"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* TAB 5: 📊 BRANCH & AGENT PERFORMANCE ANALYTICS */}
            {activeTab === 'analytics' && (
              <div className="mnp-crm-analytics-container">
                <div className="analytics-cards-grid">
                  {/* Ahmedabad HQ Branch Performance */}
                  <div className="analytics-card">
                    <div className="analytics-card-header">
                      <h4 className="analytics-card-title">
                        <span>🏢</span>
                        <span>Ahmedabad HQ (Nikol Branch)</span>
                      </h4>
                      <span className="mnp-crm-branch-pill">Headquarters</span>
                    </div>

                    <div className="analytics-stat-row">
                      <span>Total Active Leads:</span>
                      <strong>{crmLeads.filter((l) => l.branch.includes('Ahmedabad')).length} Deals</strong>
                    </div>
                    <div className="analytics-stat-row">
                      <span>Pipeline Value:</span>
                      <strong style={{ color: '#FF6B00' }}>
                        ₹{(crmLeads.filter((l) => l.branch.includes('Ahmedabad')).reduce((a, c) => a + Number(c.budget), 0) / 100000).toFixed(2)} Lakhs
                      </strong>
                    </div>
                    <div className="analytics-stat-row">
                      <span>Confirmed Bookings:</span>
                      <strong style={{ color: '#10B981' }}>
                        {crmLeads.filter((l) => l.branch.includes('Ahmedabad') && l.status === 'confirmed').length} Bookings
                      </strong>
                    </div>
                    <div className="analytics-stat-row">
                      <span>Top Performing Agent:</span>
                      <strong>Pooja (Sales Executive)</strong>
                    </div>
                    <div className="analytics-stat-row">
                      <span>Branch Manager:</span>
                      <strong>Brijesh Patel (Admin)</strong>
                    </div>
                  </div>

                  {/* Mumbai Branch Performance */}
                  <div className="analytics-card">
                    <div className="analytics-card-header">
                      <h4 className="analytics-card-title">
                        <span>🏢</span>
                        <span>Mumbai Branch (Lalbaug)</span>
                      </h4>
                      <span className="mnp-crm-branch-pill" style={{ borderColor: '#0284C7', color: '#0284C7' }}>Branch Office</span>
                    </div>

                    <div className="analytics-stat-row">
                      <span>Total Active Leads:</span>
                      <strong>{crmLeads.filter((l) => l.branch.includes('Mumbai')).length} Deals</strong>
                    </div>
                    <div className="analytics-stat-row">
                      <span>Pipeline Value:</span>
                      <strong style={{ color: '#FF6B00' }}>
                        ₹{(crmLeads.filter((l) => l.branch.includes('Mumbai')).reduce((a, c) => a + Number(c.budget), 0) / 100000).toFixed(2)} Lakhs
                      </strong>
                    </div>
                    <div className="analytics-stat-row">
                      <span>Confirmed Bookings:</span>
                      <strong style={{ color: '#10B981' }}>
                        {crmLeads.filter((l) => l.branch.includes('Mumbai') && l.status === 'confirmed').length} Bookings
                      </strong>
                    </div>
                    <div className="analytics-stat-row">
                      <span>Top Performing Agent:</span>
                      <strong>Amit (Mumbai Branch Manager)</strong>
                    </div>
                    <div className="analytics-stat-row">
                      <span>Direct Contact:</span>
                      <strong>+91 98980 83171</strong>
                    </div>
                  </div>

                  {/* Top Selling Destinations */}
                  <div className="analytics-card">
                    <div className="analytics-card-header">
                      <h4 className="analytics-card-title">
                        <span>🌍</span>
                        <span>Top Destinations by Inquiries</span>
                      </h4>
                    </div>

                    {[
                      { name: 'Vietnam 3-Cities Deluxe', pct: 92, count: '14 Inquiries' },
                      { name: 'Kashmir Dal Lake & Gulmarg', pct: 85, count: '12 Inquiries' },
                      { name: 'Dubai 5D4N Shopping Festival', pct: 78, count: '9 Inquiries' },
                      { name: 'Bali Luxury Pool Villa', pct: 72, count: '8 Inquiries' },
                      { name: 'Udaipur Royal Heritage Group', pct: 65, count: '7 Inquiries' }
                    ].map((dest) => (
                      <div key={dest.name} className="dest-rank-row">
                        <div className="dest-rank-top">
                          <span>{dest.name}</span>
                          <span style={{ color: '#64748B' }}>{dest.count}</span>
                        </div>
                        <div className="dest-rank-bar-bg">
                          <div className="dest-rank-bar-fill" style={{ width: `${dest.pct}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* MODAL 1: Add New Lead Modal */}
            {showAddLeadModal && (
              <div className="mnp-crm-submodal-overlay" onClick={() => setShowAddLeadModal(false)}>
                <div className="mnp-crm-submodal" onClick={(e) => e.stopPropagation()}>
                  <div className="mnp-crm-submodal-header">
                    <h3>➕ Add New Travel Lead / Inquiry</h3>
                    <button className="btn-crm-close" onClick={() => setShowAddLeadModal(false)}>✕</button>
                  </div>

                  <form className="mnp-crm-form-grid" onSubmit={handleCreateLeadSubmit}>
                    <div className="mnp-crm-form-group">
                      <label>Client Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Ramesh Patel"
                        value={newLeadForm.name}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. 98250 12345"
                        value={newLeadForm.phone}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Target Destination</label>
                      <select 
                        value={newLeadForm.destination}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, destination: e.target.value })}
                      >
                        <option value="Vietnam 3-Cities Deluxe (Flyer #1)">Vietnam 3-Cities Deluxe (Flyer #1)</option>
                        <option value="Thailand 3-Cities Mega (Flyer #2)">Thailand 3-Cities Mega (Flyer #2)</option>
                        <option value="Kashmir Dal Lake & Gulmarg (Flyer #3)">Kashmir Dal Lake & Gulmarg (Flyer #3)</option>
                        <option value="Bali 6D5N Luxury Pool Villa">Bali 6D5N Luxury Pool Villa</option>
                        <option value="Dubai 5D4N Shopping Festival">Dubai 5D4N Shopping Festival</option>
                        <option value="Kerala Houseboat & Munnar (Flyer #12)">Kerala Houseboat & Munnar (Flyer #12)</option>
                        <option value="Udaipur Royal Heritage Group Tour">Udaipur Royal Heritage Group Tour</option>
                        <option value="Jaisalmer Sam Sand Dunes Luxury Camp">Jaisalmer Sam Sand Dunes Luxury Camp</option>
                        <option value="Goa 4D3N Beach & Watersports">Goa 4D3N Beach & Watersports</option>
                        <option value="Singapore & Malaysia Combo 7D6N">Singapore & Malaysia Combo 7D6N</option>
                        <option value="Europe Grand Swiss & Paris Tour">Europe Grand Swiss & Paris Tour</option>
                        <option value="Custom Bespoke Itinerary">Custom Bespoke Itinerary</option>
                      </select>
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Number of Travelers (Pax)</label>
                      <input 
                        type="number" 
                        min="1" 
                        value={newLeadForm.pax}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, pax: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Departure Date</label>
                      <input 
                        type="date" 
                        value={newLeadForm.departureDate}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, departureDate: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Estimated Budget (₹)</label>
                      <input 
                        type="number" 
                        value={newLeadForm.budget}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, budget: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Branch & Agent Assigned</label>
                      <select 
                        value={newLeadForm.agent}
                        onChange={(e) => {
                          const agent = e.target.value;
                          const branch = agent.includes('Mumbai') ? 'Mumbai (Lalbaug)' : 'Ahmedabad (Nikol HQ)';
                          setNewLeadForm({ ...newLeadForm, agent, branch });
                        }}
                      >
                        <option value="Brijesh Patel (Admin)">Brijesh Patel (Admin HQ - Ahmedabad)</option>
                        <option value="Pooja (Sales Executive)">Pooja (Sales Executive - Ahmedabad)</option>
                        <option value="Amit (Mumbai Branch)">Amit (Branch Manager - Mumbai)</option>
                      </select>
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Follow-up Due Date</label>
                      <input 
                        type="date" 
                        value={newLeadForm.followUpDate}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, followUpDate: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group full">
                      <label>Follow-up Action / Notes</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Call client to verify hotel standard & flight timings"
                        value={newLeadForm.followUpNote}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, followUpNote: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group full">
                      <label>Customer Remarks / Preferences</label>
                      <textarea 
                        rows="2"
                        placeholder="Vegetarian food, 4★ hotel near city center, private transfers..."
                        value={newLeadForm.notes}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group full" style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '0.4rem' }}>
                      <button type="button" className="btn-crm-action" onClick={() => setShowAddLeadModal(false)}>Cancel</button>
                      <button type="submit" className="btn-crm-action primary">Save Lead to Pipeline</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* MODAL 2: Schedule / Reschedule Follow-up Modal */}
            {scheduleFollowupLead && (
              <div className="mnp-crm-submodal-overlay" onClick={() => setScheduleFollowupLead(null)}>
                <div className="mnp-crm-submodal" onClick={(e) => e.stopPropagation()}>
                  <div className="mnp-crm-submodal-header">
                    <h3>⏰ Schedule Follow-up for {scheduleFollowupLead.name}</h3>
                    <button className="btn-crm-close" onClick={() => setScheduleFollowupLead(null)}>✕</button>
                  </div>

                  <form 
                    className="mnp-crm-form-grid"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const date = e.target.date.value;
                      const time = e.target.time.value;
                      const note = e.target.note.value;
                      updateFollowUpSchedule(scheduleFollowupLead.id, date, time, note);
                    }}
                  >
                    <div className="mnp-crm-form-group">
                      <label>Follow-up Date *</label>
                      <input 
                        type="date" 
                        name="date" 
                        defaultValue={scheduleFollowupLead.followUpDate || '2026-11-12'} 
                        required 
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Preferred Time</label>
                      <input 
                        type="text" 
                        name="time" 
                        defaultValue={scheduleFollowupLead.followUpTime || '11:00 AM'} 
                        placeholder="e.g. 11:30 AM / 04:00 PM"
                      />
                    </div>
                    <div className="mnp-crm-form-group full">
                      <label>Follow-up Task / Objective *</label>
                      <textarea 
                        name="note" 
                        rows="3" 
                        defaultValue={scheduleFollowupLead.followUpNote || 'Call client to review updated itinerary and quote.'}
                        required 
                      />
                    </div>
                    <div className="mnp-crm-form-group full" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                      <button type="button" className="btn-crm-action" onClick={() => setScheduleFollowupLead(null)}>Cancel</button>
                      <button type="submit" className="btn-crm-action primary">Save & Update Task</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* MODAL 3: Detailed Lead View Modal */}
            {selectedLeadModal && (
              <div className="mnp-crm-submodal-overlay" onClick={() => setSelectedLeadModal(null)}>
                <div className="mnp-crm-submodal" onClick={(e) => e.stopPropagation()}>
                  <div className="mnp-crm-submodal-header">
                    <div>
                      <h3 style={{ margin: 0 }}>👤 {selectedLeadModal.name}</h3>
                      <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                        ID: {selectedLeadModal.id} • Branch: {selectedLeadModal.branch} • Agent: {selectedLeadModal.agent}
                      </span>
                    </div>
                    <button className="btn-crm-close" onClick={() => setSelectedLeadModal(null)}>✕</button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '0.5rem 0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.8rem', background: '#F8FAFC', padding: '0.8rem', borderRadius: '10px' }}>
                      <div>
                        <span style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Destination</span>
                        <div style={{ fontWeight: 800, color: '#0284C7' }}>{selectedLeadModal.destination}</div>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Quotation Budget</span>
                        <div style={{ fontWeight: 800, color: '#FF6B00' }}>₹{Number(selectedLeadModal.budget).toLocaleString('en-IN')}</div>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Departure Date</span>
                        <div style={{ fontWeight: 700, color: '#1E293B' }}>{selectedLeadModal.departureDate || selectedLeadModal.travelMonth}</div>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Travelers</span>
                        <div style={{ fontWeight: 700, color: '#1E293B' }}>{selectedLeadModal.pax} Adults</div>
                      </div>
                    </div>

                    <div className="mnp-crm-form-group">
                      <label>Pipeline Stage Status</label>
                      <select 
                        value={selectedLeadModal.status}
                        onChange={(e) => {
                          updateLeadStatus(selectedLeadModal.id, e.target.value);
                          setSelectedLeadModal({ ...selectedLeadModal, status: e.target.value });
                        }}
                      >
                        {CRM_STAGES.map((s) => (
                          <option key={s.id} value={s.id}>{s.icon} {s.label}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ background: '#FFF7ED', border: '1px solid #FFEDD5', padding: '0.8rem', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 800, color: '#C2410C', fontSize: '0.85rem' }}>⏰ Scheduled Follow-up</span>
                        <button 
                          className="btn-crm-action" 
                          style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem' }}
                          onClick={() => {
                            setScheduleFollowupLead(selectedLeadModal);
                            setSelectedLeadModal(null);
                          }}
                        >
                          Change Date
                        </button>
                      </div>
                      <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: '#431407' }}>
                        Due on <strong>{selectedLeadModal.followUpDate || 'Not scheduled'}</strong> ({selectedLeadModal.followUpTime || '11:00 AM'}):
                      </p>
                      <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#7C2D12', fontStyle: 'italic' }}>
                        "{selectedLeadModal.followUpNote || 'No specific note provided.'}"
                      </p>
                    </div>

                    {selectedLeadModal.notes && (
                      <div style={{ background: '#F1F5F9', padding: '0.8rem', borderRadius: '10px', fontSize: '0.82rem' }}>
                        <strong>Customer Remarks:</strong> {selectedLeadModal.notes}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.6rem', borderTop: '1px solid #E2E8F0', paddingTop: '0.8rem' }}>
                    <button 
                      className="btn-crm-card-del"
                      onClick={() => deleteLead(selectedLeadModal.id)}
                      style={{ padding: '0.45rem 0.8rem' }}
                    >
                      🗑️ Delete Lead
                    </button>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <a 
                        href={`https://wa.me/91${selectedLeadModal.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-crm-action primary"
                        style={{ textDecoration: 'none' }}
                      >
                        <span>💬</span>
                        <span>WhatsApp Chat</span>
                      </a>
                      <a 
                        href={`tel:+91${selectedLeadModal.phone.replace(/\D/g, '')}`}
                        className="btn-crm-action"
                        style={{ textDecoration: 'none' }}
                      >
                        <span>📞</span>
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL 4: Quick Travel Quote Calculator */}
            {showQuoteCalcModal && (
              <div className="mnp-crm-submodal-overlay" onClick={() => setShowQuoteCalcModal(false)}>
                <div className="mnp-crm-submodal" onClick={(e) => e.stopPropagation()}>
                  <div className="mnp-crm-submodal-header">
                    <h3>⚡ Quick Travel Quote Calculator</h3>
                    <button className="btn-crm-close" onClick={() => setShowQuoteCalcModal(false)}>✕</button>
                  </div>

                  {(() => {
                    const rates = {
                      'Vietnam 3-Cities Deluxe (Flyer #1)': { base: 38999, flight: 26000, visa: 3500 },
                      'Thailand 3-Cities Mega (Flyer #2)': { base: 29999, flight: 22000, visa: 0 },
                      'Kashmir Dal Lake & Gulmarg (Flyer #3)': { base: 18999, flight: 14000, visa: 0 },
                      'Bali 6D5N Luxury Pool Villa': { base: 42999, flight: 34000, visa: 3000 },
                      'Dubai 5D4N Shopping Festival': { base: 36999, flight: 24000, visa: 6500 },
                      'Kerala Houseboat & Munnar (Flyer #12)': { base: 16999, flight: 12000, visa: 0 },
                      'Udaipur Royal Heritage Group Tour': { base: 9999, flight: 6000, visa: 0 }
                    };

                    const currentRate = rates[quoteCalcState.destination] || { base: 25000, flight: 15000, visa: 0 };
                    const adultCount = Number(quoteCalcState.adults) || 1;
                    const childCount = Number(quoteCalcState.children) || 0;
                    const hotelMult = quoteCalcState.hotelTier === '5star' ? 1.35 : 1.0;

                    const perAdultBase = Math.round(currentRate.base * hotelMult);
                    const perChildBase = Math.round(currentRate.base * 0.7 * hotelMult);
                    const flightCost = quoteCalcState.includeFlight ? (adultCount + childCount) * currentRate.flight : 0;
                    const visaCost = quoteCalcState.includeVisa ? (adultCount + childCount) * currentRate.visa : 0;

                    const totalEstimatedQuote = (adultCount * perAdultBase) + (childCount * perChildBase) + flightCost + visaCost;
                    const perPersonEstimated = Math.round(totalEstimatedQuote / (adultCount + childCount));

                    const shareQuoteText = `Hello! MNP Holidays Pvt. Ltd. Official Travel Quote:\n\n🌍 Destination: *${quoteCalcState.destination}*\n👥 Travelers: ${adultCount} Adults${childCount > 0 ? `, ${childCount} Children` : ''}\n🏨 Hotel Standard: ${quoteCalcState.hotelTier === '5star' ? '5★ Ultra Luxury' : '4★ Luxury'}\n✈️ Flights Included: ${quoteCalcState.includeFlight ? 'Yes' : 'No'}\n🛂 Visa Included: ${quoteCalcState.includeVisa ? 'Yes' : 'No'}\n\n💰 Total Package Price: *₹${totalEstimatedQuote.toLocaleString('en-IN')}*\n(Approx ₹${perPersonEstimated.toLocaleString('en-IN')} per traveler)\n\nIncludes verified hotels, private transfers, daily breakfast & 24/7 concierge assistance.\nCall Ahmedabad: +91 97122 04028 | Mumbai: +91 98980 83171`;

                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        <div className="mnp-crm-form-group">
                          <label>Choose Tour Destination</label>
                          <select 
                            value={quoteCalcState.destination}
                            onChange={(e) => setQuoteCalcState({ ...quoteCalcState, destination: e.target.value })}
                          >
                            <option value="Vietnam 3-Cities Deluxe (Flyer #1)">Vietnam 3-Cities Deluxe (Flyer #1)</option>
                            <option value="Thailand 3-Cities Mega (Flyer #2)">Thailand 3-Cities Mega (Flyer #2)</option>
                            <option value="Kashmir Dal Lake & Gulmarg (Flyer #3)">Kashmir Dal Lake & Gulmarg (Flyer #3)</option>
                            <option value="Bali 6D5N Luxury Pool Villa">Bali 6D5N Luxury Pool Villa</option>
                            <option value="Dubai 5D4N Shopping Festival">Dubai 5D4N Shopping Festival</option>
                            <option value="Kerala Houseboat & Munnar (Flyer #12)">Kerala Houseboat & Munnar (Flyer #12)</option>
                            <option value="Udaipur Royal Heritage Group Tour">Udaipur Royal Heritage Group Tour</option>
                          </select>
                        </div>

                        <div className="mnp-crm-form-grid">
                          <div className="mnp-crm-form-group">
                            <label>Adult Travelers</label>
                            <input 
                              type="number" 
                              min="1" 
                              value={quoteCalcState.adults}
                              onChange={(e) => setQuoteCalcState({ ...quoteCalcState, adults: e.target.value })}
                            />
                          </div>
                          <div className="mnp-crm-form-group">
                            <label>Child Travelers</label>
                            <input 
                              type="number" 
                              min="0" 
                              value={quoteCalcState.children}
                              onChange={(e) => setQuoteCalcState({ ...quoteCalcState, children: e.target.value })}
                            />
                          </div>
                          <div className="mnp-crm-form-group">
                            <label>Hotel Category</label>
                            <select 
                              value={quoteCalcState.hotelTier}
                              onChange={(e) => setQuoteCalcState({ ...quoteCalcState, hotelTier: e.target.value })}
                            >
                              <option value="4star">4★ Verified Luxury</option>
                              <option value="5star">5★ Ultra Luxury Palace</option>
                            </select>
                          </div>
                          <div className="mnp-crm-form-group" style={{ justifyContent: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.8rem' }}>
                              <input 
                                type="checkbox"
                                checked={quoteCalcState.includeFlight}
                                onChange={(e) => setQuoteCalcState({ ...quoteCalcState, includeFlight: e.target.checked })}
                              />
                              <span>Include Airfare</span>
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.8rem', marginTop: '4px' }}>
                              <input 
                                type="checkbox"
                                checked={quoteCalcState.includeVisa}
                                onChange={(e) => setQuoteCalcState({ ...quoteCalcState, includeVisa: e.target.checked })}
                              />
                              <span>Include Visa Fees</span>
                            </label>
                          </div>
                        </div>

                        {/* Resulting Quotation Card */}
                        <div className="mnp-crm-quote-result">
                          <div>
                            <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Instant Travel Quotation</span>
                            <div className="mnp-crm-quote-amount">₹{totalEstimatedQuote.toLocaleString('en-IN')}</div>
                            <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>≈ ₹{perPersonEstimated.toLocaleString('en-IN')} per traveler</span>
                          </div>
                          <a 
                            href={`https://wa.me/?text=${encodeURIComponent(shareQuoteText)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-crm-action primary"
                            style={{ textDecoration: 'none' }}
                          >
                            <span>💬</span>
                            <span>Share Quote</span>
                          </a>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
